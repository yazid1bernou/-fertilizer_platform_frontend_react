import FarmerLayout from "../../layouts/FarmerLayout";

const DashboardFarmer = () => {
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
                    {/*  <!-- Welcome & CTA --> */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-[#131615] dark:text-white">أهلاً بك، فلاحنا الكريم</h2>
                            <p className="text-[#6c7f76]">إليك ملخص نشاط مستثمرتك الفلاحية لهذا اليوم</p>
                        </div>
                        <button
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all">
                            <span className="material-symbols-outlined">add_circle</span>
                            تقديم طلب سماد جديد
                        </button>
                    </div>
                    {/*  <!-- Stats Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div
                            className="bg-white dark:bg-[#1a2420] p-6 rounded-2xl border border-[#dee3e1] dark:border-[#2e3a34] flex items-center gap-4">
                            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-3xl">map</span>
                            </div>
                            <div>
                                <p className="text-[#6c7f76] text-sm font-medium">مساحة الأرض الكلية</p>
                                <p className="text-2xl font-bold">150.5 <span
                                    className="text-sm font-normal text-[#6c7f76]">هكتار</span></p>
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-[#1a2420] p-6 rounded-2xl border border-[#dee3e1] dark:border-[#2e3a34] flex items-center gap-4">
                            <div
                                className="size-14 rounded-xl bg-accent-earth/10 flex items-center justify-center text-accent-earth">
                                <span className="material-symbols-outlined text-3xl">grass</span>
                            </div>
                            <div>
                                <p className="text-[#6c7f76] text-sm font-medium">المحاصيل النشطة</p>
                                <p className="text-2xl font-bold">القمح، الشعير</p>
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-[#1a2420] p-6 rounded-2xl border border-[#dee3e1] dark:border-[#2e3a34] flex items-center gap-4">
                            <div className="size-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                            </div>
                            <div>
                                <p className="text-[#6c7f76] text-sm font-medium">رصيد الدعم المتاح</p>
                                <p className="text-2xl font-bold">450,000 <span
                                    className="text-sm font-normal text-[#6c7f76]">دج</span></p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Last Request & Progress --> */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div
                            className="lg:col-span-2 bg-white dark:bg-[#1a2420] rounded-2xl border border-[#dee3e1] dark:border-[#2e3a34] p-8">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-bold">حالة آخر طلب سماد</h3>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">رقم الطلب:
                                    #REF-9832</span>
                            </div>
                            <div className="relative">
                                {/*  <!-- Stepper --> */}
                                <div className="flex items-center justify-between w-full relative">
                                    <div className="absolute top-5 right-0 left-0 h-[2px] bg-[#dee3e1] dark:bg-[#2e3a34] -z-0">
                                    </div>
                                    <div className="absolute top-5 right-0 h-[2px] bg-primary -z-0 w-2/3" ></div>
                                    <div className="relative z-10 flex flex-col items-center gap-2">
                                        <div
                                            className="size-10 rounded-full bg-primary text-white flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">check</span>
                                        </div>
                                        <span className="text-xs font-bold">تم الاستلام</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center gap-2">
                                        <div
                                            className="size-10 rounded-full bg-primary text-white flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">check</span>
                                        </div>
                                        <span className="text-xs font-bold">قيد المعالجة</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center gap-2">
                                        <div
                                            className="size-10 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white dark:border-[#1a2420]">
                                            <span className="material-symbols-outlined text-sm">hourglass_empty</span>
                                        </div>
                                        <span className="text-xs font-bold text-primary">الموافقة المبدئية</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center gap-2">
                                        <div
                                            className="size-10 rounded-full bg-[#dee3e1] dark:bg-[#2e3a34] text-[#6c7f76] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">local_shipping</span>
                                        </div>
                                        <span className="text-xs font-bold text-[#6c7f76]">جاهز للتسليم</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 p-4 bg-background-light dark:bg-[#25312b] rounded-xl flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                                <div className="text-sm">
                                    <p className="font-bold text-[#131615] dark:text-white">التحديث الأخير: اليوم الساعة 09:45
                                    </p>
                                    <p className="text-[#6c7f76] mt-1 leading-relaxed">تمت مراجعة الوثائق المرفقة بنجاح من قبل
                                        مديرية المصالح الفلاحية. الطلب في طور التصديق النهائي لتخصيص الكمية المطلوبة.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Side Card --> */}
                        <div
                            className="bg-primary text-white rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold mb-1">الخارطة الفلاحية</h3>
                                <p className="text-white/70 text-sm">تتبع توزيع المحاصيل في مستثمرتك</p>
                            </div>
                            <div
                                className="h-32 bg-white/10 rounded-xl mt-6 flex items-center justify-center overflow-hidden border border-white/20 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnoOuGHrRVbA1lFnpptftXjF97Uo11rtYgRB_KSJk7KwNQuz0KE5LTuoRoKnVh5JvSwCYDb46vhhO1i8tX3S5NaqIecjOjmcUAIm_XSD3l0t7WbjLaks6KRhn9GYOE6rV6V2g5orujQB6QLFKIvTfJ0sjRRYd6ILNQJ-eTZTgB3swWggNEpN9wQZT19uUljVhJAg3ne53fdPOYnzfhOnU-aSfT_SGM34pDLvVb3a4K8LeaWlpEDW1xB7r7tQybksiFjfblBtvk5a5D')]">
                                <div className="w-full h-full bg-cover bg-center"
                                    data-alt="Satellite map view of agricultural green fields" data-location="Algeria"
                                >
                                </div>
                            </div>
                            <button
                                className="mt-6 w-full py-2 bg-white text-primary font-bold rounded-lg text-sm hover:bg-opacity-90 transition-all">توسيع
                                الخريطة</button>
                            {/* <!-- Abstract Design Element --> */}
                            <div className="absolute -bottom-10 -left-10 size-40 bg-white/5 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                    {/*  <!-- Recent Activity Table --> */}
                    <div
                        className="bg-white dark:bg-[#1a2420] rounded-2xl border border-[#dee3e1] dark:border-[#2e3a34] overflow-hidden">
                        <div className="p-6 border-b border-[#dee3e1] dark:border-[#2e3a34] flex items-center justify-between">
                            <h3 className="text-lg font-bold">النشاطات الأخيرة</h3>
                            <a className="text-sm text-primary font-bold hover:underline" href="#">عرض الكل</a>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-right">
                                <thead>
                                    <tr className="bg-background-light dark:bg-[#25312b] text-[#6c7f76] text-xs uppercase">
                                        <th className="px-6 py-4 font-bold">النشاط</th>
                                        <th className="px-6 py-4 font-bold">التاريخ</th>
                                        <th className="px-6 py-4 font-bold">الكمية</th>
                                        <th className="px-6 py-4 font-bold">الحالة</th>
                                        <th className="px-6 py-4 font-bold"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#dee3e1] dark:divide-[#2e3a34]">
                                    <tr>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="size-8 rounded bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                                    <span className="material-symbols-outlined text-lg">check_circle</span>
                                                </div>
                                                <span className="text-sm font-medium">استلام سماد يوريا 46%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-[#6c7f76]">12 مارس 2024</td>
                                        <td className="px-6 py-4 text-sm font-bold">2.5 طن</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">مكتمل</span>
                                        </td>
                                        <td className="px-6 py-4 text-left">
                                            <button className="text-[#6c7f76] hover:text-primary"><span
                                                className="material-symbols-outlined">more_vert</span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="size-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                                    <span className="material-symbols-outlined text-lg">receipt_long</span>
                                                </div>
                                                <span className="text-sm font-medium">دفع رسوم الطلب #REF-9832</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-[#6c7f76]">10 مارس 2024</td>
                                        <td className="px-6 py-4 text-sm font-bold">--</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">مؤكد</span>
                                        </td>
                                        <td className="px-6 py-4 text-left">
                                            <button className="text-[#6c7f76] hover:text-primary"><span
                                                className="material-symbols-outlined">more_vert</span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="size-8 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                                                    <span className="material-symbols-outlined text-lg">pending</span>
                                                </div>
                                                <span className="text-sm font-medium">طلب سماد فوسفاتي</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-[#6c7f76]">08 مارس 2024</td>
                                        <td className="px-6 py-4 text-sm font-bold">5.0 طن</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full">قيد
                                                المراجعة</span>
                                        </td>
                                        <td className="px-6 py-4 text-left">
                                            <button className="text-[#6c7f76] hover:text-primary"><span
                                                className="material-symbols-outlined">more_vert</span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>


        </FarmerLayout>
    )
}

export default DashboardFarmer;