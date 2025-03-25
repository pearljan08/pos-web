import SideNav from '../../components/SideNav'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'


const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div>
          <SideNav />
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2">
              <section className="m-10">
                <div className="p-10 rounded-l-xl border border-blue-gray-100 rounded-xl">
                </div>
              </section>
            </div>
            <div className="mt-10">
              <Card>Hi</Card>
            </div>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Dashboard
