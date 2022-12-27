import {memo} from "react"

function Footer(){
    return (
        <footer className="footer footer-center p-4 bg-gray-900 text-slate-50">
            <div>
                <p>Copyright © 2022 - M TEGUH P</p>
            </div>
        </footer>
    )
}

export default memo(Footer)