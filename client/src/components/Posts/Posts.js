import React from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    
    return( 
        <MaterialTable
            title="Inventory Data"
            columns={[                
                { title: 'Item Code', field: 'itemcode', filtering: false },
                { title: 'Name 1', field: 'name1', filtering: false },
                { title: 'Name 2', field: 'name2', filtering: false },
                { title: 'Price', field: 'price', filtering: false },
                { title: 'Vendor Name', field: 'vendorname', type:'string' },
                { title: 'Date', field: 'date', type:'date'},
            ]}
            data={posts}        
            options={{
                filtering: true,
                headerStyle: {
                    backgroundColor: '#3f51b5',
                    color: '#FFF',
                },
                rowStyle: {
                    backgroundColor: '#EEE',
                }
            }}
        />
    )
}

export default Posts;