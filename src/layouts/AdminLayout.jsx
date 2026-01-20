
const AdminLayout = ({ children }) => {
    return (
        <>
            <div>
                <h2>  Admin Navbar</h2>
                <h3>Admin sidebar</h3>
                {children}
            </div>


        </>
    )
}

export default AdminLayout;