import React from 'react';

const columns = ['1', '2', '3', '4', '5', '6', '7', '8'];
const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const grid = columns.map(i => rows.map(j => `${i}${j}`));


const Grid = ({ children }) => (
    <div className='grid-container'>
        {children}
    </div>
);

// const GridColumn

const GridItem = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
);

const App = () => (
    <Grid>
        {columns.map((i, index1) => rows.map((j, index2) =>
            <GridItem
                className={`grid-item ${index2%2=== 0 ? i%2=== 0 ? 'grid-item--even':'grid-item--odd' : i%2=== 0 ? 'grid-item--odd':'grid-item--even'} column-${i} row-${j} item-${i}${j}`}
                >{`${i}${j}`}
            </GridItem>
        ))}
    </Grid>
);

export default App;
