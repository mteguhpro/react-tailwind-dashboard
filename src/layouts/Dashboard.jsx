import useSidebarStore from "../zustand/sidebar"
import SidebarMenu from "../components/SidebarMenu"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SampleContent from "../pages/SampleContent"

function Dashboard() {
    const { isActive, toggle } = useSidebarStore((state) => state)

    let sidebarClass = 'bg-gray-900 text-slate-50 h-screen overflow-x-auto fixed z-30 w-full '
    sidebarClass += isActive ? 'sm:w-64' : 'sm:w-16 hidden sm:block'

    let contentClass = 'w-full '
    contentClass += isActive ? 'sm:pl-64' : 'sm:pl-16'

    let footerClass = 'mt-auto '
    footerClass += isActive ? 'sm:pl-64' : 'sm:pl-16'

    return (
        <div className="flex flex-col min-h-screen">
            <div className={sidebarClass}>

                <button onClick={toggle} className="btn btn-square btn-sm fixed right-0 z-10 m-1 sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <SidebarMenu/>

            </div>

            <div className={contentClass}>
                <Navbar/>
                <SampleContent/>
            </div>



            <div className={footerClass}>
                <Footer/>
            </div>

        </div>
    )
}

export default Dashboard