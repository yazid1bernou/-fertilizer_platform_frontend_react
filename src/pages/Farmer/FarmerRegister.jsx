import axios from "axios";
import { useState } from "react";

const FarmerRegister = () => {

    const [step, setStep] = useState(1)

    // state of step 1 
    const [nationalFarmerNumber, setNationalFarmerNumber] = useState("")
    const [firstNameFr, setFirstNameFr] = useState("")
    const [lastNameFr, setLastNameFr] = useState("")

    // state of step 2 
    const [form, setForm] = useState({
        full_name: '',
        national_farm_number: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
    })

    // state of laoding ,error , success 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');



    // Step 1 
    const handleCheckNationalNumber = async (e) => {
        e.preventDefault();

        setLoading(true)
        setError('')

        try {
            const res = await axios.post('http://localhost:8000/api/farmer/verify-identity',
                {
                    national_farm_number: nationalFarmerNumber,
                    first_name_fr: firstNameFr,
                    last_name_fr: lastNameFr,
                }
            )
            if (res.data.status == true) {
                setStep(2)
                setForm((prev) => ({ ...prev, full_name: `${lastNameFr}  ${firstNameFr}` }))
            }


        }
        catch (err) {
            setError(err.response?.data?.message || 'خطأ في التحقق')
        }

        setLoading(false)

    }

    // Step 2 
    const handleRegisterFarmer = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const res = await axios.post('http://localhost:8000/api/farmer/register-farmer',
                {
                    ...form,
                    national_farm_number: nationalFarmerNumber
                }
            )
            localStorage.setItem('token', res.data.token)
            setSuccess('Compte créé avec success.')
            window.location.href = "/farmer/dashboard"
        }
        catch (err) {
            setError('خطأ في التسجيل')
        }

        setLoading(false)
    }



    return (

        <div classNameName="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <header className="w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-primary">
                            <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#121714] dark:text-white text-lg font-extrabold tracking-tight">منصة توزيع الأسمدة</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-8 ">
                        <a className="text-[#121714]  dark:text-gray-300 text-sm font-extrabold hover:text-primary transition-colors " href="#">الرئيسية</a>
                        <a className="text-[#121714] dark:text-gray-300 text-sm font-extrabold hover:text-primary transition-colors" href="#">حول المنصة</a>
                        <a className="text-[#121714] dark:text-gray-300 text-sm font-extrabold hover:text-primary transition-colors" href="#">اتصل بنا</a>
                        <button className="bg-primary hover:bg-primary/90 text-white text-sm font-extrabold px-6 py-2 rounded-lg transition-all shadow-sm">
                            تسجيل الدخول
                        </button>
                    </div>
                </div>
            </header>

            {step === 1 && (
                <main className="flex-grow relative flex items-center justify-center py-12 px-4 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/50 to-white/95 dark:from-background-dark/95 dark:via-background-dark/80 dark:to-background-dark/95 z-10"></div>
                        <div className="w-full h-full bg-center bg-cover bg-[url('')]"></div>
                    </div>
                    <div className="relative z-20 w-full max-w-xl">
                        <div className="bg-white dark:bg-[#2c313a] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="p-8 pb-0">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-primary font-extrabold text-sm tracking-wide">الخطوة 1 من 2</span>
                                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">التحقق من الهوية</h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary text-sm font-extrabold">50%</span>
                                    </div>
                                </div>
                                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full transition-all duration-500 w-[50%] "></div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center gap-2 text-primary">
                                        <span className="material-symbols-outlined text-lg">check_circle</span>
                                        <span className="text-xs font-extrabold">التحقق من البيانات</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <span className="material-symbols-outlined text-lg">radio_button_unchecked</span>
                                        <span className="text-xs font-extrabold">تفاصيل الحساب</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-gray-100 dark:border-gray-700" />
                            <div className="p-8">
                                <div className="text-center mb-8">
                                    <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">التحقق من بيانات الفلاح</h1>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-extrabold">
                                        يرجى إدخال بياناتك الرسمية كما تظهر في بطاقة الفلاح للمتابعة في عملية التسجيل.
                                    </p>
                                </div>

                                <form onSubmit={handleCheckNationalNumber} className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-extrabold text-gray-700 dark:text-gray-300" for="farmer-id">الرقم الفلاحي الوطني (NIU)</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                                <span className="material-symbols-outlined">badge</span>
                                            </div>
                                            <input
                                                className="block w-full pr-10 pl-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary transition-all text-lg placeholder:text-gray-400 dark:text-white text-right"
                                                dir="ltr" id="farmer-id"
                                                name="farmer-id"
                                                value={nationalFarmerNumber}
                                                onChange={(e) => setNationalFarmerNumber(e.target.value)}
                                                placeholder="0000 0000 0000"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-extrabold text-gray-700 dark:text-gray-300" for="last-name">اللقب بالفرنسية (Nom)</label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">person</span>
                                                </div>
                                                <input className="block w-full pr-10 pl-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary transition-all text-lg placeholder:text-gray-400 dark:text-white text-left"
                                                    dir="ltr"
                                                    id="last-name"
                                                    name="last-name"
                                                    value={lastNameFr}
                                                    onChange={(e) => setLastNameFr(e.target.value)}
                                                    placeholder="Ex: BENALI"
                                                    type="text" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-extrabold text-gray-700 dark:text-gray-300" for="first-name">الاسم بالفرنسية (Prénom)</label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">person</span>
                                                </div>
                                                <input className="block w-full pr-10 pl-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary transition-all text-lg placeholder:text-gray-400 dark:text-white text-left"
                                                    dir="ltr"
                                                    id="first-name"
                                                    name="first-name"
                                                    value={firstNameFr}
                                                    onChange={(e) => setFirstNameFr(e.target.value)}
                                                    placeholder="Ex: Ahmed"
                                                    type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    {error ?
                                        (<div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3">

                                            <div className="text-primary shrink-0">
                                                <span className="material-symbols-outlined text-xl text-red-600">cancel</span>
                                            </div>

                                            <p className="text-xs text-red-700 dark:text-gray-300 leading-relaxed font-extrabold">
                                                {error}
                                            </p>
                                        </div>)
                                        :
                                        (
                                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3">

                                                <div className="text-primary shrink-0">
                                                    <span className="material-symbols-outlined text-xl">info</span>
                                                </div>

                                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-extrabold">
                                                    يرجى التأكد من مطابقة الأسماء للحروف اللاتينية الموجودة في وثائق الهوية الرسمية أو بطاقة الفلاح.
                                                </p>
                                            </div>
                                        )
                                    }

                                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-extrabold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group" >
                                        <span>تحقق من البيانات</span>
                                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                    </button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-col items-center gap-4">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                        بالنقر على تحقق، أنت توافق على معالجة بياناتك وفقاً لسياسة الخصوصية الوطنية.
                                    </p>
                                    <div className="flex gap-4">
                                        <img alt="Government ministry logo" className="h-8 opacity-60 grayscale hover:grayscale-0 transition-all cursor-help" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa5rRyvMx-5N-QCg92r3SAkOikpVQ77XYtzTm8U0zeN7pmMQQKgkRq3nCPogn1evs1nvsKNBg611ZhSQ_IM-GbvsoqQPsf2kPBPZ8V3wuD2vZBe5r-dmuprll38ZJwYoCTn3X3zv6dpO0KEXoc1bckZm7eFyVWFjsWi1QW3LZ6NCRrM5cs6z3276fdTrHCduefOSfB7iHM_r4L1XtdZnC7E4dh0xH90g0ZtOLPyn48dTLEZDE8Y0inwsn5lvDy-tzHE0LGI6CzWxfV" />
                                        <img alt="Security certification logo" className="h-8 opacity-60 grayscale hover:grayscale-0 transition-all cursor-help" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7fKn6VudL4I24UCE4WmgLowziYPS0z_TfZi8-p3H-ZBcWOkdxFj4LC0HjLg0p4BBNcs1-aab5GSqJwdXmmOEqDpiLvPyUUKS_S6jfsqtCLpJT02tORLYj5saURWTcySbR1ySwguirM3ycGmutqgzIVX0-tcQvfYiVB6KjMSvIRlC_GKAJsPXe8fVw9vvnlkg7i6qi3xVm9mcuS0Obdsc_ouqtXrlGFYS5j1Be1lrGBVgtv25MOUxZeaEnFZ0b0y2BUf7DG_25yFrX" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
                            تواجه مشكلة؟ <a className="text-primary font-bold hover:underline" href="#">تواصل مع الدعم الفني</a>
                        </p>
                    </div>
                </main>
            )}
            {step === 2 && (
                <main className="flex-1 flex justify-center py-10 px-4">
                    <div className="w-full max-w-[640px] flex flex-col gap-6">
                        {/*    <!-- Progress Timeline --> */}
                        <div
                            className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#dee3df] dark:border-gray-800 shadow-sm">
                            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_40px_1fr] gap-x-2">
                                {/*  <!-- Step 1 Done --> */}
                                <div className="flex flex-col items-center gap-1">
                                    <div className="text-primary"><span
                                        className="material-symbols-outlined text-[28px]">check_circle</span></div>
                                    <div className="w-[2px] bg-primary/20 h-full md:hidden"></div>
                                </div>
                                <div className="flex flex-col pb-6 md:pb-0">
                                    <p className="text-[#131614] dark:text-white text-sm font-bold leading-tight">التحقق من
                                        الهوية</p>
                                    <p className="text-success text-xs font-medium">مكتمل بنجاح</p>
                                </div>
                                {/*    <!-- Step 2 Active --> */}
                                <div className="flex flex-col items-center gap-1">
                                    <div className="text-primary"><span
                                        className="material-symbols-outlined text-[28px]">radio_button_checked</span></div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[#131614] dark:text-white text-sm font-bold leading-tight">بيانات الحساب
                                    </p>
                                    <p className="text-primary text-xs font-medium">قيد الإنجاز حالياً</p>
                                </div>
                            </div>
                        </div>
                        {/*    <!-- Main Form Container --> */}
                        <div
                            className="bg-white dark:bg-background-dark p-8 rounded-2xl border border-[#dee3df] dark:border-gray-800 shadow-sm flex flex-col gap-8">
                            <div className="text-center">
                                <h1 className="text-[#131614] dark:text-white text-2xl font-extrabold tracking-tight">إكمال
                                    بيانات الحساب</h1>
                                <p className="text-[#6b8072] dark:text-gray-400 mt-2">يرجى تعيين معلومات الدخول الخاصة بك للوصول
                                    للمنصة مستقبلاً</p>
                            </div>
                            {/*     <!-- Success Alert --> */}
                            <div className="flex items-center gap-4 rounded-xl border border-success/30 bg-success/5 p-4">
                                <div className="text-primary"><span className="material-symbols-outlined">verified</span></div>
                                <div className="flex flex-col">
                                    <p className="text-primary text-md  leading-tight font-extrabold">تم التحقق من رقم الفلاح بنجاح
                                    </p>
                                    <p className="text-success/80 text-md font-extrabold">تم سحب بياناتك الرسمية من قاعدة البيانات
                                        الوطنية للأسمدة.</p>
                                </div>
                            </div>
                            {error &&
                                (<div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3">

                                    <div className="text-primary shrink-0">
                                        <span className="material-symbols-outlined text-xl text-red-600">cancel</span>
                                    </div>

                                    <p className="text-xs text-red-700 dark:text-gray-300 leading-relaxed font-extrabold">
                                        {error}
                                    </p>
                                </div>)
                            }
                            {/*   <!-- Registration Form --> */}
                            <form onSubmit={handleRegisterFarmer}>
                                <div className="flex flex-col gap-5">
                                    {/*  <!-- Read-only Field --> */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#131614] dark:text-white text-sm font-bold pr-1">اسم الفلاح (للقراءة
                                            فقط)</label>
                                        <div
                                            className="flex w-full items-stretch rounded-xl bg-[#f1f3f2] dark:bg-gray-800 border border-transparent">
                                            <input
                                                className="flex-1 bg-transparent border-none text-[#131614] dark:text-gray-400 h-14 px-4 text-base focus:ring-0 cursor-not-allowed"
                                                readonly=""
                                                value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                                            />
                                            <div className="flex items-center pr-4 text-gray-400"><span
                                                className="material-symbols-outlined">lock</span></div>
                                        </div>
                                    </div>
                                    {/*    <!-- Input Fields --> */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[#131614] dark:text-white text-sm font-bold pr-1">البريد
                                                الإلكتروني</label>
                                            <input
                                                className="h-14 rounded-xl border-[#dee3df] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#131614] dark:text-white px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
                                                placeholder="example@mail.dz"
                                                type="email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}

                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[#131614] dark:text-white text-sm font-bold pr-1">رقم
                                                الهاتف</label>
                                            <input
                                                className="h-14 rounded-xl border-[#dee3df] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#131614] dark:text-white px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-left"
                                                dir="ltr"
                                                placeholder="05XXXXXXXX"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                type="tel" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2 relative">
                                            <label className="text-[#131614] dark:text-white text-sm font-bold pr-1">كلمة
                                                المرور</label>
                                            <div className="relative">
                                                <input
                                                    className="w-full h-14 rounded-xl border-[#dee3df] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#131614] dark:text-white px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                    type="password"
                                                    value={form.password}
                                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                                />
                                                <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><span
                                                    className="material-symbols-outlined text-xl">visibility</span></button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 relative">
                                            <label className="text-[#131614] dark:text-white text-sm font-bold pr-1">تأكيد كلمة
                                                المرور</label>
                                            <div className="relative">
                                                <input
                                                    className="w-full h-14 rounded-xl border-[#dee3df] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#131614] dark:text-white px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                    type="password"
                                                    value={form.password_confirmation}
                                                    onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })}
                                                />
                                                <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><span
                                                    className="material-symbols-outlined text-xl">visibility</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*    <!-- Action Buttons --> */}
                                <div className="flex flex-col gap-4 pt-4">
                                    <button type="submit"
                                        className="w-full h-14 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">how_to_reg</span>
                                        إتمام عملية التسجيل
                                    </button>
                                    <a className="text-center text-[#6b8072] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors flex items-center justify-center gap-1"
                                        onClick={() => {
                                            setStep(1)
                                            setError("")
                                        }}
                                        href="#">
                                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                                        العودة للمرحلة السابقة
                                    </a>
                                </div>
                            </form>
                        </div>
                        {/*    <!-- Footer Help --> */}
                        <div className="text-center px-4">
                            <p className="text-[#6b8072] dark:text-gray-500 text-xs">بضغطك على إتمام التسجيل، أنت توافق على <a
                                className="underline" href="#">شروط الاستخدام</a> و <a className="underline" href="#">سياسة
                                    الخصوصية</a> لمنصة توزيع الأسمدة الجزائرية.</p>
                        </div>
                    </div>
                </main>
            )}
            <footer className="bg-white dark:bg-background-dark py-6 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 منصة توزيع الأسمدة الوطنية - الجمهورية الجزائرية الديمقراطية الشعبية</p>
                </div>
            </footer>
        </div>
    )
}

export default FarmerRegister;