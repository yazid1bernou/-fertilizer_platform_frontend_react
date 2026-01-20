import FarmerLayout from "../../layouts/FarmerLayout";

const ProfileFarmer = () => {
    return (
        <FarmerLayout>
            {/*  <!-- Main Content --> */}
            <main className="flex-1 mr-64">
                {/*  <!-- Header --> */}
                <header
                    className="h-20 border-b border-[#dee3e1] dark:border-[#2e3a34] bg-white dark:bg-[#1a2420] px-8 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative w-full max-w-md">
                            <span
                                className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#6c7f76]">search</span>
                            <input
                                className="w-full bg-background-light dark:bg-[#25312b] border-none rounded-lg pr-10 pl-4 py-2 text-sm focus:ring-2 focus:ring-primary/20"
                                placeholder="بحث عن طلبات أو بيانات..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            className="size-10 rounded-full flex items-center justify-center bg-background-light dark:bg-[#25312b] relative">
                            <span className="material-symbols-outlined text-[#131615] dark:text-white">notifications</span>
                            <span
                                className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2420]"></span>
                        </button>
                        <div className="h-8 w-[1px] bg-[#dee3e1] dark:bg-[#2e3a34]"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-left">
                                <p className="text-sm font-bold leading-none">أحمد بن محمد</p>
                                <p className="text-[10px] text-[#6c7f76] mt-1">مستثمرة رقم 4421</p>
                            </div>
                            <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7fdwUQPbDNaofgDnOfB25JavzSEmtCERm4Otk2CAjOWPzboDhvKC_DV0S3AdB5UX8y-LHzwsw6Idis9wQL7QvKr2C-wBbpi-nRtoKwW4y_9Bi5zT1istUC_aEuz4HDdkAB1hvahjHF2_mu-HmLpmAoE6mi-NSEfeagqxoIPj0y4t-tW7qcaMKC8l4LRbwRpOClF23ZQ-bSzFNOs4IB7YLRx5JbNryGKaMUUzHbO6DT9kAl3R2fJBpUIdHmMnyxcazNRtIsh0nYrX')]"
                                data-alt=""
                            >
                            </div>
                        </div>
                    </div>
                </header>
                <div className="p-8">
                    <main class="flex-1 overflow-y-auto px-4 lg:px-12 py-8">
                        <div class="max-w-[1000px] mx-auto space-y-6">
                            {/*   <!-- Profile Header --> */}
                            <div
                                class="bg-white dark:bg-[#1c261f] rounded-xl p-6 shadow-sm border border-[#dee3df] dark:border-[#2d3a31]">
                                <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div class="flex items-center gap-6 flex-col md:flex-row text-center md:text-right">
                                        <div class="relative">
                                            <div class="w-32 h-32 rounded-full border-4 border-primary/20 bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWYkSgZ2oZadzF8Qy4-F6zxqzWlVjNNY3KSo7Im97mOBKcyBTfCrg8p5p-SuTHMH0yvKcesWRx88re5CC-F7rlw4HA-8WrTnhK29Ol5IAUlJ9TKNOp8eXlQsdYMgHtEDn2X8x6nDP6R7GkCU0kZa53W0jS5ACj4JZtwBMWr8aLsIY1RXRcUYsmwRvYD6K7T9obxoy4Lg1vGPCb8800ejCcuMuEpeki1g_f4dzsy6sykIM2P2CgzC6JNI6muTXMiAWNleGc5noJqamV')]"
                                                data-alt=""
                                            >
                                            </div>
                                            <button
                                                class="absolute bottom-0 left-0 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-[#1c261f]">
                                                <span class="material-symbols-outlined text-sm">photo_camera</span>
                                            </button>
                                        </div>
                                        <div class="space-y-1">
                                            <div class="flex items-center gap-2 justify-center md:justify-start">
                                                <h2 class="text-2xl font-bold tracking-tight">أحمد محمد</h2>
                                                <span
                                                    class="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full border border-green-200 dark:border-green-800">
                                                    <span class="material-symbols-outlined text-xs fill-icon">verified</span>
                                                    موثق
                                                </span>
                                            </div>
                                            <p class="text-[#6b8072]">فلاح معتمد منذ 2021 • ولاية معسكر</p>
                                            <div class="flex items-center gap-4 mt-2 justify-center md:justify-start">
                                                <div
                                                    class="text-center md:text-right border-l md:pl-4 border-[#dee3df] dark:border-[#2d3a31]">
                                                    <p class="text-[10px] uppercase text-[#6b8072] font-bold tracking-wider">التقييم
                                                    </p>
                                                    <div class="flex text-yellow-500"><span
                                                        class="material-symbols-outlined text-sm fill-icon">star</span><span
                                                            class="material-symbols-outlined text-sm fill-icon">star</span><span
                                                                class="material-symbols-outlined text-sm fill-icon">star</span><span
                                                                    class="material-symbols-outlined text-sm fill-icon">star</span><span
                                                                        class="material-symbols-outlined text-sm">star</span></div>
                                                </div>
                                                <div class="text-center md:text-right">
                                                    <p class="text-[10px] uppercase text-[#6b8072] font-bold tracking-wider">الحالة
                                                        الضريبية</p>
                                                    <p class="text-sm font-bold text-primary">نشط</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        class="bg-primary text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-primary/20">
                                        <span class="material-symbols-outlined">edit</span>
                                        تعديل الملف الشخصي
                                    </button>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/*  <!-- Identification Details --> */}
                                <div
                                    class="bg-white dark:bg-[#1c261f] rounded-xl shadow-sm border border-[#dee3df] dark:border-[#2d3a31] overflow-hidden">
                                    <div
                                        class="p-5 border-b border-[#dee3df] dark:border-[#2d3a31] flex justify-between items-center">
                                        <h3 class="font-bold flex items-center gap-2">
                                            <span class="material-symbols-outlined text-primary">badge</span>
                                            بيانات التعريف الشخصية
                                        </h3>
                                    </div>
                                    <div class="p-5 space-y-4">
                                        <div class="flex items-center justify-between group">
                                            <div class="space-y-0.5">
                                                <p class="text-xs text-[#6b8072]">رقم الفلاح الوطني</p>
                                                <p class="font-bold text-sm">DZ-998877-2021</p>
                                            </div>
                                            <span
                                                class="material-symbols-outlined text-[#A19D94] group-hover:text-primary cursor-pointer text-lg">edit</span>
                                        </div>
                                        <hr class="border-[#dee3df] dark:border-[#2d3a31]" />
                                        <div class="flex items-center justify-between group">
                                            <div class="space-y-0.5">
                                                <p class="text-xs text-[#6b8072]">رقم بطاقة التعريف البيومترية</p>
                                                <p class="font-bold text-sm">1234 5678 9012 3456</p>
                                            </div>
                                            <span
                                                class="material-symbols-outlined text-[#A19D94] group-hover:text-primary cursor-pointer text-lg">edit</span>
                                        </div>
                                        <hr class="border-[#dee3df] dark:border-[#2d3a31]" />
                                        <div class="flex items-center justify-between group">
                                            <div class="space-y-0.5">
                                                <p class="text-xs text-[#6b8072]">رقم الهاتف المحمول</p>
                                                <p class="font-bold text-sm">+213 555 123 456</p>
                                            </div>
                                            <span
                                                class="material-symbols-outlined text-[#A19D94] group-hover:text-primary cursor-pointer text-lg">edit</span>
                                        </div>
                                    </div>
                                </div>
                                {/*   <!-- Farm Information --> */}
                                <div
                                    class="bg-white dark:bg-[#1c261f] rounded-xl shadow-sm border border-[#dee3df] dark:border-[#2d3a31] overflow-hidden flex flex-col">
                                    <div
                                        class="p-5 border-b border-[#dee3df] dark:border-[#2d3a31] flex justify-between items-center">
                                        <h3 class="font-bold flex items-center gap-2">
                                            <span class="material-symbols-outlined text-primary">landscape</span>
                                            معلومات المزرعة
                                        </h3>
                                    </div>
                                    <div class="flex-1 p-0 flex flex-col md:flex-row">
                                        <div class="p-5 flex-1 space-y-4">
                                            <div>
                                                <p class="text-xs text-[#6b8072]">المساحة الإجمالية</p>
                                                <p class="font-bold text-xl text-primary">45.5 هكتار</p>
                                            </div>
                                            <div>
                                                <p class="text-xs text-[#6b8072]">المحاصيل المزروعة</p>
                                                <div class="flex flex-wrap gap-2 mt-2">
                                                    <span class="bg-[#f1f3f2] dark:bg-[#2d3a31] text-xs px-2 py-1 rounded">قمح
                                                        صلب</span>
                                                    <span
                                                        class="bg-[#f1f3f2] dark:bg-[#2d3a31] text-xs px-2 py-1 rounded">بطاطا</span>
                                                    <span
                                                        class="bg-[#f1f3f2] dark:bg-[#2d3a31] text-xs px-2 py-1 rounded">زيتون</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="md:w-48 h-40 md:h-auto bg-[#dee3df] relative group cursor-pointer">
                                            <div class="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHSpi-153i19MHPrRiubz7gbBtWo4yUSC5SawQZAHx_oLYVV9yNfwfHqBFV_Z-YzuWWjGEVFd94fjw-PEwoHo1TtW3y9phE0DI1mkG5zSBolg_rqwCiAzywoD9pHu9uTHVqeU4Nzha8K-L49RLoj2xU5JSuuqRk5Vd0Mgw7T2EEbLCmH6eoDaWUNOI8XiCjn1cJ1eJCKg1uAWT3WUIWG_i9ThFsCBi3XQ2L94mxTWvFgId0yH5GX651FagNEv9UnmqEBj6WlUVegVi')]"
                                                data-alt=""
                                                data-location="Mascara, Algeria"
                                            >
                                            </div>
                                            <div
                                                class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span
                                                    class="bg-white dark:bg-background-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg">توسيع
                                                    الخريطة</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  <!-- Document Management Section --> */}
                            <div class="space-y-4">
                                <h3 class="text-xl font-bold flex items-center gap-2 px-1">
                                    <span class="material-symbols-outlined text-primary">description</span>
                                    إدارة المستندات القانونية
                                </h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/*   <!-- Card: Farmer ID --> */}
                                    <div
                                        class="bg-white dark:bg-[#1c261f] p-4 rounded-xl border border-[#dee3df] dark:border-[#2d3a31] flex flex-col justify-between group hover:border-primary/50 transition-colors">
                                        <div class="flex justify-between items-start mb-4">
                                            <div class="p-3 bg-primary/10 rounded-lg text-primary">
                                                <span class="material-symbols-outlined">contact_emergency</span>
                                            </div>
                                            <span
                                                class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">صالح</span>
                                        </div>
                                        <div>
                                            <p class="font-bold text-sm mb-1">بطاقة الفلاح</p>
                                            <p class="text-xs text-[#6b8072] mb-4">تم التحقق في 12 ماي 2023</p>
                                            <button
                                                class="w-full py-2 text-xs font-bold border border-[#dee3df] dark:border-[#2d3a31] rounded-lg hover:bg-background-light dark:hover:bg-[#2d3a31] transition-colors">عرض
                                                المستند</button>
                                        </div>
                                    </div>
                                    {/*    <!-- Card: Land Deed --> */}
                                    <div
                                        class="bg-white dark:bg-[#1c261f] p-4 rounded-xl border border-[#dee3df] dark:border-[#2d3a31] flex flex-col justify-between group hover:border-primary/50 transition-colors">
                                        <div class="flex justify-between items-start mb-4">
                                            <div class="p-3 bg-primary/10 rounded-lg text-primary">
                                                <span class="material-symbols-outlined">assignment</span>
                                            </div>
                                            <span
                                                class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">صالح</span>
                                        </div>
                                        <div>
                                            <p class="font-bold text-sm mb-1">عقد الملكية / عقد الامتياز</p>
                                            <p class="text-xs text-[#6b8072] mb-4">تم التحقق في 15 جوان 2023</p>
                                            <button
                                                class="w-full py-2 text-xs font-bold border border-[#dee3df] dark:border-[#2d3a31] rounded-lg hover:bg-background-light dark:hover:bg-[#2d3a31] transition-colors">عرض
                                                المستند</button>
                                        </div>
                                    </div>
                                    {/*   <!-- Card: Tax Document --> */}
                                    <div
                                        class="bg-white dark:bg-[#1c261f] p-4 rounded-xl border border-dashed border-[#dee3df] dark:border-[#2d3a31] flex flex-col justify-center items-center text-center gap-2 group hover:bg-primary/5 transition-colors cursor-pointer min-h-[160px]">
                                        <div
                                            class="p-4 bg-[#f1f3f2] dark:bg-[#2d3a31] rounded-full group-hover:bg-primary/20 transition-colors">
                                            <span class="material-symbols-outlined text-primary">add_a_photo</span>
                                        </div>
                                        <p class="text-xs font-bold">إضافة مستند جديد</p>
                                        <p class="text-[10px] text-[#6b8072]">شهادة عدم الخضوع للضريبة أو غيرها</p>
                                    </div>
                                </div>
                            </div>
                            {/*  <!-- Security & Account Settings --> */}
                            <div
                                class="bg-white dark:bg-[#1c261f] rounded-xl shadow-sm border border-[#dee3df] dark:border-[#2d3a31] overflow-hidden">
                                <div class="p-5 border-b border-[#dee3df] dark:border-[#2d3a31]">
                                    <h3 class="font-bold flex items-center gap-2">
                                        <span class="material-symbols-outlined text-primary">security</span>
                                        الأمان وإعدادات الحساب
                                    </h3>
                                </div>
                                <div class="p-0">
                                    <div
                                        class="flex items-center justify-between p-5 hover:bg-background-light dark:hover:bg-[#2d3a31] transition-colors cursor-pointer group">
                                        <div class="flex items-center gap-4">
                                            <div class="text-[#6b8072] group-hover:text-primary transition-colors">
                                                <span class="material-symbols-outlined">lock_reset</span>
                                            </div>
                                            <div>
                                                <p class="text-sm font-bold">تغيير كلمة المرور</p>
                                                <p class="text-xs text-[#6b8072]">آخر تغيير منذ 3 أشهر</p>
                                            </div>
                                        </div>
                                        <span class="material-symbols-outlined text-[#A19D94]">chevron_left</span>
                                    </div>
                                    <hr class="border-[#dee3df] dark:border-[#2d3a31]" />
                                    <div
                                        class="flex items-center justify-between p-5 hover:bg-background-light dark:hover:bg-[#2d3a31] transition-colors cursor-pointer group">
                                        <div class="flex items-center gap-4">
                                            <div class="text-[#6b8072] group-hover:text-primary transition-colors">
                                                <span class="material-symbols-outlined">phonelink_lock</span>
                                            </div>
                                            <div>
                                                <p class="text-sm font-bold">المصادقة الثنائية (2FA)</p>
                                                <p class="text-xs text-primary font-medium">مفعلة عبر الرسائل القصيرة</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div class="w-10 h-6 bg-primary rounded-full relative">
                                                <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="border-[#dee3df] dark:border-[#2d3a31]" />
                                    <div
                                        class="flex items-center justify-between p-5 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors cursor-pointer group">
                                        <div class="flex items-center gap-4 text-red-600">
                                            <span class="material-symbols-outlined">no_accounts</span>
                                            <p class="text-sm font-bold">تعطيل الحساب مؤقتاً</p>
                                        </div>
                                        <span class="material-symbols-outlined text-[#A19D94]">chevron_left</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*     <!-- Footer Spacer --> */}
                        <div class="h-12"></div>
                    </main>
                </div>
            </main>

        </FarmerLayout>
    )
}

export default ProfileFarmer;