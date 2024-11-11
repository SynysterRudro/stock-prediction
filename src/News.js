export const News = () => {
    return (

        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                জিপি স্টার গ্রাহকদের জন্য ইউনিলিভার পিউরিটে বিশেষ ছাড়
                            </h3>
                            {/* <span className="text-xs dark:text-gray-400">January 21, 2021</span> */}
                            <p>দেশজুড়ে নিরাপদ খাবার পানি নিশ্চিত করতে ইউনিলিভার বাংলাদেশ লিমিটেডের ব্র্যান্ড পিউরিটের সঙ্গে কৌশলগত অংশীদারিত্ব করেছে গ্রামীণফোন বাংলাদেশ। এ লক্ষ্যে সম্প্রতি উভয় প্রতিষ্ঠান একটি সমঝোতা স্মারক সই করে। এ এমওইউ’র মাধ্যমে গ্রামীণফোনের লক্ষ্য নিজেদের গ্রাহকদের জীবনযাত্রার মানোন্নয়ন।</p>
                            <div className="flex">


                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn mx-4" onClick={() => document.getElementById('my_modal_3').showModal()}>View Full News</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">   জিপি স্টার গ্রাহকদের জন্য ইউনিলিভার পিউরিটে বিশেষ ছাড়</h3>
                                        <p className="py-4">
                                            দেশজুড়ে নিরাপদ খাবার পানি নিশ্চিত করতে ইউনিলিভার বাংলাদেশ লিমিটেডের ব্র্যান্ড পিউরিটের সঙ্গে কৌশলগত অংশীদারিত্ব করেছে গ্রামীণফোন বাংলাদেশ। এ লক্ষ্যে সম্প্রতি উভয় প্রতিষ্ঠান একটি সমঝোতা স্মারক সই করে। এ এমওইউ’র মাধ্যমে গ্রামীণফোনের লক্ষ্য নিজেদের গ্রাহকদের জীবনযাত্রার মানোন্নয়ন। রাজধানীর জিপি হাউজে সম্প্রতি এ সমঝোতা চুক্তি সই অনুষ্ঠানের আয়োজন করা হয়। নিজ নিজ প্রতিষ্ঠানের পক্ষে সমঝোতা চুক্তিতে সই করেন গ্রামীণফোনের হেড অব প্রিমিয়াম সেগমেন্ট অ্যান্ড মার্কেটিং ফারহা নাজ জামান এবং ইউনিলিভার বাংলাদেশের ফাইন্যান্স ডিরেক্টর জিনিয়া তানজিনা হক। এ অংশীদারিত্বের মাধ্যমে প্রতিষ্ঠানের সামাজিক দায়বদ্ধতা ও গ্রাহকদের প্রতি নিজেদের দায়িত্বশীল অবস্থান আরও নিশ্চিত করলো গ্রামীণফোন। এ ছাড়ের আওতায় ইউনিলিভার পিউরিট ওয়াটার পিউরিফায়ারের পণ্যগুলোতে ছাড় পাবেন জিপি স্টার গ্রাহকরা। এ অফারে পিউরিট আলটিমায় দুই হাজার ৫০০ টাকা ছাড়, পিউরিট মারভেলায় দুই হাজার টাকা ছাড়, পিউরিট ক্ল্যাসিক মিনারেলে এক হাজার ৫০০ টাকা ছাড় এবং ক্লাসিক এম০৫ এর ক্ষেত্রে ১০ শতাংশ ছাড় উপভোগের সুযোগসহ ফ্রি এক্সপ্রেস ইনস্টলেশন পাওয়া যাবে। ডিভাইসের সর্বোচ্চ খুচরা মূল্যের (এমআরপি) ওপর এ ছাড় প্রযোজ্য হবে। ফলে, জিপি স্টার গ্রাহকদের জন্য এখন আরও সাশ্রয়ী মূল্যে ইউনিলিভার পিউরিটের মানসম্মত পিউরিফায়ারের মাধ্যমে স্বাস্থ্য সুরক্ষা নিশ্চিত করা সম্ভব হবে। এছাড়া জিপি স্টার গ্রাহকরা আলটিমা, মারভেলা বা ক্লাসিক মিনারেল কেনার পর যেকোনো ধরনের অভিযোগের ক্ষেত্রে সাধারণ গ্রাহকের চেয়ে ছয় মাস বেশি অর্থাৎ মোট ১৮ মাসের জন্য একদম বিনামূল্যে সার্ভিস ওয়্যারেন্টি পাবেন। সব জিপি স্টার গ্রাহকের জন্য অফারটি আগামী ২০২৪ সালের ৩১ ডিসেম্বর পর্যন্ত প্রযোজ্য হবে। গ্রাহকদের অফারটি উপভোগে পিইউআরইআইটি টাইপ করে ২৯০০০ নাম্বারে পাঠাতে হবে। ১৬৬২৭ নাম্বার থেকে একজন কাস্টমার সার্ভিস এজেন্ট পরবর্তী ৪৮ ঘণ্টার মধ্যে যোগাযোগ করবেন। এ বিষয়ে গ্রামীণফোনের হেড অব প্রিমিয়াম সেগমেন্ট অ্যান্ড মার্কেটিং ফারহা নাজ জামান বলেন, নিরাপদ পানীয় সুবিধা একটি অন্যতম মৌলিক অধিকার, যা সবার জন্য সহজলভ্য হওয়া উচিত। ইউনিলিভার পিউরিটের সঙ্গে অংশীদারিত্বের মাধ্যমে আমরা জিপি স্টার গ্রাহকদের জন্য বিশুদ্ধ পানীয় প্রাপ্তি আরও সহজ করে তুলছি। ইউনিলিভার বাংলাদেশের হেড অব বিজনেস ফর ওয়াটার অ্যান্ড এয়ার ওয়েলনেস শরিফউদ্দিন নওরোজ আহমেদ সন্তুষ্টি প্রকাশ করে বলেন, জিপি স্টার গ্রাহকদের জন্য ইউনিলিভার পিউরিটের উন্নত পানি বিশুদ্ধিকরণ সুবিধা নিয়ে আসার ক্ষেত্রে গ্রামীণফোনের অংশীদার হতে পেরে আমরা আনন্দিত। শতভাগ ‘আরও’ পদ্ধতিতে বিশুদ্ধকৃত পানি সরবরাহের মাধ্যমে দেশের সব পরিবারের সুস্বাস্থ্য নিশ্চিত করাই আমাদের লক্ষ্য। অনুষ্ঠানে উপস্থিত ছিলেন গ্রামীণফোনের পক্ষ থেকে প্রিমিয়াম সেগমেন্টের অ্যাকুইজিশন অ্যান্ড মনিটাইজেশন জেনারেল ম্যানেজার মো. রিয়াজ আল ফারুক ভূঁইয়া, প্রিমিয়াম সেগমেন্টের লাইফস্টাইল বান্ডেলিং লিড ফজলে রাব্বি, প্রিমিয়াম সেগমেন্টের ক্যাম্পেইন ম্যানেজার সামিরা ইয়ামিন রসুল এবং ইউনিলিভার বাংলাদেশের পক্ষ থেকে ওয়াটার অ্যান্ড এয়ার ওয়েলনেস হেড অব বিজনেস শরিফউদ্দিন নওরোজ আহমেদ, ব্র্যান্ড ম্যানেজার এস এম ফাহিম হোসেন, সিনিয়র বিজনেস ডেভেলপমেন্ট ম্যানেজার এ কে এম তানভীর হোসেন ও কাস্টমার রিলেশনশিপ ম্যানেজার বর্ণা দাশগুপ্ত।
                                        </p>
                                    </div>
                                </dialog>




                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Prediction</button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">জিপি স্টার গ্রাহকদের জন্য ইউনিলিভার পিউরিটে বিশেষ ছাড়</h3>
                                        <p className="py-4">
                                            This is a positive news <br />
                                            Accuracy is - 72 %</p>
                                    </div>
                                </dialog>


                            </div>


                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">ডাভ শ্যাম্পু নতুন রূপে লঞ্চ করেছে ইউনিলিভার</h3>
                            {/* <span className="text-xs dark:text-gray-400">January 22, 2021</span> */}
                            <p>ইউনিলিভার বাংলাদেশ তাদের শ্যাম্পু ব্র্যান্ড ডাভ নতুন রূপে লঞ্চ করেছে। কনজুমারদের চুলের ড্যামেজ সলিউশনের পাশাপাশি ডাভ এসেছে নতুন রূপে আকর্ষনীয় প্যাক ডিজাইন নিয়ে। ইউনিলিভার বাংলাদেশ লিমিটেডের সিইও এবং ব্যবস্থাপনা পরিচালক জাভেদ আখতার দর্শকদের উপস্থিতিতে নতুন এ শ্যাম্পু একাধিক জনপ্রিয় শ্যাম্পু বাজার থেকে প্রত্যাহারের দাবি জানায় </p>
                            <div className="flex">


                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn mx-4" onClick={() => document.getElementById('my_modal_3').showModal()}>View Full News</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                    </div>
                                </dialog>




                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Predict</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                    </div>
                                </dialog>


                            </div>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">দামে কারসাজি: ইউনিলিভার, সিটি, প্যারাগন, কাজীর বিরুদ্ধে মামলা</h3>
                            {/* <span className="text-xs dark:text-gray-400">January 23, 2021</span> */}
                            <p>কমিশনের চেয়ারম্যান মফিজুল ইসলাম নিউজবাংলাকে বলেন, ‘আইন অনুযায়ী তাদের বিরুদ্ধে ব্যবস্থা নেয়া হবে। বাজারের সুষ্ঠু প্রতিযোগিতার নিয়ম ভেঙে চাল, আটা, ডিম, ব্রয়লার মুরগি, সাবান, ডিটারজেন্টসহ অস্বাভাবিকভাবে বিভিন্ন অস্বাভাবিক মূল্যবৃদ্ধি এবং কৃত্রিম সংকট সৃষ্টির প্রমাণ পেয়েছে </p>
                            <div className="flex">


                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn mx-4" onClick={() => document.getElementById('my_modal_3').showModal()}>View Full News</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                    </div>
                                </dialog>




                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Predict</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                    </div>
                                </dialog>


                            </div>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                জিপি স্টার গ্রাহকদের জন্য ইউনিলিভার পিউরিটে বিশেষ ছাড়
                            </h3>
                            {/* <span className="text-xs dark:text-gray-400">January 21, 2021</span> */}
                            <p>দেশজুড়ে নিরাপদ খাবার পানি নিশ্চিত করতে ইউনিলিভার বাংলাদেশ লিমিটেডের ব্র্যান্ড পিউরিটের সঙ্গে কৌশলগত অংশীদারিত্ব করেছে গ্রামীণফোন বাংলাদেশ। এ লক্ষ্যে সম্প্রতি উভয় প্রতিষ্ঠান একটি সমঝোতা স্মারক সই করে। এ এমওইউ’র মাধ্যমে গ্রামীণফোনের লক্ষ্য নিজেদের গ্রাহকদের জীবনযাত্রার মানোন্নয়ন।</p>
                            <div className="flex">
                                <button type="button" className="px-6 py-3 mx-6 text-sm rounded-md hover:underline dark:bg-gray-700 dark:text-gray-400">See more</button>
                                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-700 dark:text-gray-400">Predict</button>
                            </div>


                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">ডাভ শ্যাম্পু নতুন রূপে লঞ্চ করেছে ইউনিলিভার</h3>
                            {/* <span className="text-xs dark:text-gray-400">January 22, 2021</span> */}
                            <p>ইউনিলিভার বাংলাদেশ তাদের শ্যাম্পু ব্র্যান্ড ডাভ নতুন রূপে লঞ্চ করেছে। কনজুমারদের চুলের ড্যামেজ সলিউশনের পাশাপাশি ডাভ এসেছে নতুন রূপে আকর্ষনীয় প্যাক ডিজাইন নিয়ে। ইউনিলিভার বাংলাদেশ লিমিটেডের সিইও এবং ব্যবস্থাপনা পরিচালক জাভেদ আখতার দর্শকদের উপস্থিতিতে নতুন এ শ্যাম্পু একাধিক জনপ্রিয় শ্যাম্পু বাজার থেকে প্রত্যাহারের দাবি জানায় </p>
                            <div className="flex">
                                <button type="button" className="px-6 py-3 mx-6 text-sm rounded-md hover:underline dark:bg-gray-700 dark:text-gray-400">See more</button>
                                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-700 dark:text-gray-400">Predict</button>
                            </div>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">দামে কারসাজি: ইউনিলিভার, সিটি, প্যারাগন, কাজীর বিরুদ্ধে মামলা</h3>
                            {/* <span className="text-xs dark:text-gray-400">January 23, 2021</span> */}
                            <p>কমিশনের চেয়ারম্যান মফিজুল ইসলাম নিউজবাংলাকে বলেন, ‘আইন অনুযায়ী তাদের বিরুদ্ধে ব্যবস্থা নেয়া হবে। বাজারের সুষ্ঠু প্রতিযোগিতার নিয়ম ভেঙে চাল, আটা, ডিম, ব্রয়লার মুরগি, সাবান, ডিটারজেন্টসহ অস্বাভাবিকভাবে বিভিন্ন অস্বাভাবিক মূল্যবৃদ্ধি এবং কৃত্রিম সংকট সৃষ্টির প্রমাণ পেয়েছে </p>
                            <div className="flex">
                                <button type="button" className="px-6 py-3 mx-6 text-sm rounded-md hover:underline dark:bg-gray-700 dark:text-gray-400">See more</button>
                                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-700 dark:text-gray-400">Predict</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                </div>
            </div>
        </section>
    );
};