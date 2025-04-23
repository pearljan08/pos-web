import { RectangleStackIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { Table } from '../../components/Table';

const Users = () => {
    const TABLE_HEAD = ["id", "user", "name", "role", "terminal", "status","dateAdded", "addedBy"];
  
    const TABLE_ROWS = [
      {
        id: "1",
        user: "Product 1",
        name: "Name 1",
        role: "Role 1",
        terminal: 1,
        status: 2,
        dateAdded: "23/04/18",
        addedBy: "23/04/18",
      },
      {
        id: "2",
        user: "Product 2",
        name: "Name 2",
        role: "Role 2",
        terminal: 2,
        status: 1,
        dateAdded: "23/04/18",
        addedBy: "23/04/18",
      },
      {
        id: "3",
        user: "Product 3",
        name: "Name 3",
        role: "Role 3",
        terminal: 3,
        status: 0,
        dateAdded: "23/04/18",
        addedBy: "23/04/18",
      },
    ];
    
  return (
    <>
      <div className="bg-gray-100 min-w-screen min-h-screen">
        <div className="grid grid-cols-6">
            <div></div>
            <div className='col-span-5'>
                <section className="m-5 mt-0">
                    <Table header={TABLE_HEAD} data={TABLE_ROWS} title="User List" titleIcon={<RectangleStackIcon className="w-7 h-7"/>}/>
                </section>
            </div>
        </div>
      </div>
    </>
  )
}

export default Users
