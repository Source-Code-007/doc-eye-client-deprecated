import Footer from "@/Components/SharedCompo/Footer/Footer";
import Navbar from "@/Components/SharedCompo/Nav/Navbar";
import { ToastContainer } from "react-toastify";

const layout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>

            {/* Toast container */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default layout;