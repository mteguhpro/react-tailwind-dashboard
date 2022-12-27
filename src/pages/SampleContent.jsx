import {memo} from "react"

function SampleContent() {
    return (
        <>

            <div className="card m-2 bg-zinc-50 shadow-xl">
                <div className="card-body">

                    <h1 className="card-title">Sample Content</h1>

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover">
                                    <th>1</th>
                                    <td>John Doe</td>
                                    <td>Jl Merdeka Jaya 145</td>
                                    <td>Male</td>
                                </tr>
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Dwi Santi</td>
                                    <td>Jl Mawar Melati No 25</td>
                                    <td>Female</td>
                                </tr>
                                <tr className="hover">
                                    <th>3</th>
                                    <td>Dini Winarti</td>
                                    <td>Jl Kota Baru No 421</td>
                                    <td>Female</td>
                                </tr>
                                <tr className="hover">
                                    <th>4</th>
                                    <td>Budi Santo</td>
                                    <td>Jl Merdeka Jaya 220</td>
                                    <td>Male</td>
                                </tr>
                                <tr className="hover">
                                    <th>5</th>
                                    <td>Ani Sulastri</td>
                                    <td>Jl Permata Asri 20</td>
                                    <td>Female</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
                
                <div className="card bg-success  text-success-content shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                </div>
                <div className="card bg-info text-info-content shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                </div>
                <div className="card bg-warning text-warning-content shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                </div>
                <div className="card bg-error text-error-content shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                </div>

            </div>

            

        </>
    )
}

export default memo(SampleContent)