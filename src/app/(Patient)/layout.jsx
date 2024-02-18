import Footer from "@/Components/SharedCompo/Footer/Footer";
import Navbar from "@/Components/SharedCompo/Nav/Navbar";

const layout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;