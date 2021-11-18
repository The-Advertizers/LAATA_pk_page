import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {basePath} from "../next.config";
import {useRouter} from "next/router";
import * as fbq from "../lib/fpixel";

function Form({title, close}) {
    const router = useRouter();

    const [values, setValues] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "message": "",
        "course": title
    });

    function setValue(key, value) {
        values[key] = value;
        setValues(values);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`${basePath}/bookCourse.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        }).then(async r => {
            if (r.ok) {
                close();
                fbq.event('Lead');
                await router.push(`/thankyou`);
            }
        }).catch(e => console.log(e));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-4 flex flex-col w-full max-w-sm mx-auto items-center justify-center">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-secondary md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            onChange={e => setValue("name", e.target.value)}
                            className="bg-accent-lighter appearance-none
                                rounded w-full py-2 px-4 text-accent-dark
                                leading-tight focus:outline-none focus:bg-white
                                border-none ring-none focus:ring
                                focus:ring-accent"
                            id="inline-full-name"
                            type="text"
                            required
                            placeholder="Jane Doe"/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-secondary md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-phone">
                            Phone
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            onChange={e => setValue("phone", e.target.value)}
                            className="bg-accent-lighter appearance-none
                                rounded w-full py-2 px-4 text-accent-dark
                                leading-tight focus:outline-none focus:bg-white
                                border-none ring-none focus:ring
                                focus:ring-accent"
                            id="inline-phone"
                            type="tel"
                            required
                            placeholder="+923xxxxxxxxx"/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-secondary md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-email">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            onChange={e => setValue("email", e.target.value)}
                            className="bg-accent-lighter appearance-none
                                rounded w-full py-2 px-4 text-accent-dark
                                leading-tight focus:outline-none focus:bg-white
                                border-none ring-none focus:ring
                                focus:ring-accent"
                            id="inline-email"
                            type="email"
                            placeholder="abc@gmail.com"/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-secondary md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-message">
                            Message
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea
                            onChange={e => setValue("message", e.target.value)}
                            className="bg-accent-lighter appearance-none
                                rounded w-full py-2 px-4 text-accent-dark
                                leading-tight focus:outline-none focus:bg-white
                                border-none ring-none focus:ring
                                focus:ring-accent"
                            id="inline-message"/>
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="button">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default function BookCourseDialog({isOpen, closeModal, courseTitle: courseTitle}) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-20 overflow-y-auto"
                    onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 backdrop-filter
                             backdrop-blur-sm"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden
                            text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                                <Dialog.Title
                                    as="h3"
                                    className="text-secondary text-lg font-bold leading-6">
                                    Book Your Course
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Fill in the details below and our team will contact you shortly.
                                    </p>
                                    <Form title={courseTitle} close={closeModal}/>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}