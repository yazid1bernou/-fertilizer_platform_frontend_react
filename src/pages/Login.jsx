

const Login = () => {

    return (

        <div classNameName="bg-background-light dark:bg-background-dark font-display">
            <div className="flex h-screen w-full overflow-hidden">
                {/*  <!-- Left Panel: Branding & Imagery --> */}
                <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 text-white overflow-hidden">
                    {/*   <!-- Background Image with Overlay --> */}
                    <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/login.jpg')]" data-alt="">

                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    </div>
                    {/*   <!-- Logo & Brand Header --> */}
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="size-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg">
                            <img className="w-8 h-8" src="logo.png" alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-extrabold leading-none">منصة توزيع الأسمدة</h1>
                            <p className="text-white/80 text-sm mt-1 font-extrabold">الجمهورية الجزائرية الديمقراطية الشعبية</p>
                        </div>
                    </div>
                    {/* <!-- Welcome Message --> */}
                    <div className="relative z-10 max-w-lg">
                        <h2 className="text-4xl font-extrabold leading-tight mb-6 ">نحو زراعة مستدامة ومنظمة في الجزائر</h2>
                        <p className="text-xl text-white/90 font-extrabold leading-relaxed ">نظام متكامل لتسيير وتوزيع الأسمدة المدعمة
                            بكل شفافية وأمان، لدعم الفلاح الجزائري وتعزيز الأمن الغذائي.</p>
                    </div>
                    {/*   <!-- Footer Info --> */}
                    <div className="relative z-10 flex gap-8 text-sm text-white/70">
                        <span>© 2026 وزارة الفلاحة والتنمية الريفية</span>
                        <a className="hover:text-white underline underline-offset-4" href="#">سياسة الخصوصية</a>
                    </div>
                </div>
                {/*  <!-- Right Panel: Login Form --> */}
                <div
                    className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background-light dark:bg-background-dark">
                    <div className="w-full max-w-[480px]">
                        {/*  <!-- Mobile Header (Visible only on small screens) --> */}
                        <div className="lg:hidden flex items-center gap-3 mb-10">
                            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd"
                                        d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                                        fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-[#121614] dark:text-white text-xl font-bold">منصة توزيع الأسمدة</h2>
                        </div>
                        {/*   <!-- Page Heading --> */}
                        <div className="mb-10">
                            <h3 className="text-[#121614] dark:text-white text-4xl font-extrabold tracking-tight mb-3">مرحباً بك مجدداً
                            </h3>
                            <p className="text-[#6a8173] dark:text-[#a1b3a8] text-lg font-extrabold">الرجاء إدخال بياناتك للوصول إلى حسابك وإدارة
                                طلباتك.</p>
                        </div>
                        <form className="space-y-6">
                            {/*    <!-- Email Field --> */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#121614] dark:text-white text-base font-extrabold">البريد الإلكتروني</label>
                                <div className="relative group">
                                    <input
                                        className="form-input w-full rounded-xl text-[#121614] dark:text-white border-[#dde3e0] dark:border-[#3a443e] bg-white dark:bg-[#2d2d32] focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base transition-all placeholder:text-[#6a8173]/50"
                                        placeholder="example@domain.dz" type="email" />
                                    <span
                                        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6a8173]">mail</span>
                                </div>
                            </div>
                            {/*   <!-- Password Field --> */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#121614] dark:text-white text-base font-extrabold">كلمة المرور</label>
                                <div className="relative group">
                                    <input
                                        className="form-input w-full rounded-xl text-[#121614] dark:text-white border-[#dde3e0] dark:border-[#3a443e] bg-white dark:bg-[#2d2d32] focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base transition-all placeholder:text-[#6a8173]/50"
                                        placeholder="********" type="password" />
                                    <button
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6a8173] hover:text-primary transition-colors"
                                        type="button">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                </div>
                            </div>
                            {/*   <!-- Remember Me & Forgot Password --> */}
                            <div className="flex items-center justify-between py-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        className="w-5 h-5 rounded border-[#dde3e0] text-primary focus:ring-primary transition-all"
                                        type="checkbox" />
                                    <span
                                        className="text-sm font-extrabold text-[#121614] dark:text-[#dde3e0] group-hover:text-primary transition-colors">تذكرني
                                        على هذا الجهاز</span>
                                </label>
                                <a className="text-sm font-extrabold text-primary hover:underline underline-offset-4 transition-all"
                                    href="#">نسيت كلمة المرور؟</a>
                            </div>
                            {/*  <!-- Login Button -->  */}
                            <button
                                className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl text-lg font-extrabold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                                type="submit">
                                <span>تسجيل الدخول</span>
                                <span className="material-symbols-outlined">login</span>
                            </button>
                        </form>
                        {/* <!-- Bottom CTA --> */}
                        <div className="mt-10 pt-8 border-t border-[#f1f4f2] dark:border-[#3a443e] text-center">
                            <p className="text-[#6a8173] dark:text-[#a1b3a8] text-base font-extrabold">
                                فلاح جديد؟
                                <a className="text-primary  hover:underline underline-offset-4 mr-1" href="#">إنشاء حساب
                                    جديد للمنصة</a>
                            </p>
                        </div>
                        {/*    <!-- Language/Support Links --> */}
                        <div className="mt-12 flex justify-center gap-6 text-sm text-[#6a8173]">
                            <a className="hover:text-primary flex items-center gap-1" href="#">
                                <span className="material-symbols-outlined text-[18px]">language</span>
                                Français
                            </a>
                            <a className="hover:text-primary flex items-center gap-1" href="#">
                                <span className="material-symbols-outlined text-[18px]">help</span>
                                مركز المساعدة
                            </a>
                            <a className="hover:text-primary flex items-center gap-1" href="#">
                                <span className="material-symbols-outlined text-[18px]">call</span>
                                اتصل بنا
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;