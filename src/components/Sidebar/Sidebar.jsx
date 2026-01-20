import { Link } from "react-router";

const Sidebar = () => {
    return (
        <aside
            className="w-64 border-l border-[#dee3e1] dark:border-[#2e3a34] bg-white dark:bg-[#1a2420] flex flex-col fixed inset-y-0 right-0 z-50">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-10">
                    <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">potted_plant</span>
                    </div>
                    <div>
                        <h1 className="text-[#131615] dark:text-white text-base font-bold leading-none">مديرية الفلاحة</h1>
                        <p className="text-[#6c7f76] text-xs font-normal mt-1">الجمهورية الجزائرية</p>
                    </div>
                </div>
                <nav className="space-y-2">
                    <Link to="/farmer/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold"
                        href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm">الرئيسية</span>
                    </Link>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#6c7f76] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-primary/5 transition-all"
                        href="#">
                        <span className="material-symbols-outlined">agriculture</span>
                        <span className="text-sm">مزرعتي</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#6c7f76] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-primary/5 transition-all"
                        href="#">
                        <span className="material-symbols-outlined">description</span>
                        <span className="text-sm">الطلبات</span>
                    </a>
                    <Link to="/farmer/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#6c7f76] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-primary/5 transition-all"
                        href="#">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-sm">الملف الشخصي</span>
                    </Link>
                </nav>
            </div>
            <div className="mt-auto p-6">
                <div className="bg-background-light dark:bg-[#25312b] p-4 rounded-xl">
                    <p className="text-xs text-[#6c7f76] mb-2 font-medium">تحتاج مساعدة؟</p>
                    <button
                        className="w-full text-xs bg-white dark:bg-[#1a2420] py-2 rounded-lg border border-[#dee3e1] dark:border-[#2e3a34] font-bold">تواصل
                        معنا</button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;
