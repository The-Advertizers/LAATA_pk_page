import Head from 'next/head'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import StructureCard from "../components/StructureCard";
import ParticlesBackground from "../components/ParticlesBackground";
import BookCourseDialog from "../components/BookCourseDialog";

import data from '../data/level-7-diploma';
import {basePath} from "../next.config";
import {useEffect, useRef, useState} from "react";
import {ChevronDoubleDownIcon, ChevronDoubleRightIcon} from "@heroicons/react/solid";
import TeamMemberCard from "../components/TeamMemberCard";
import * as fbq from "../lib/fpixel";

export default function Home() {
    const details = useRef(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    function closeModal() {
        setIsOpenModal(false)
    }

    function openModal() {
        setIsOpenModal(true)
    }

    useEffect(fbq.pageview, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <Head>
                    <title>Level 7 Diploma in injectables for clinical aesthetic treatments</title>
                    <link rel="icon" href={`${basePath}/favicon.png`}/>
                </Head>

                <ParticlesBackground/>
                <div className="container section-screen mx-auto sm:justify-between items-center">
                    <Header/>
                    <div>
                        <h1>
                            LEVEL 7 DIPLOMA IN INJECTABLES FOR MEDICAL AESTHETIC TREATMENTS
                        </h1>
                        <p className="text-gray-600 mb-4">Are you wishing to build a career around in the near
                            future?</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16">
                            <div className="animate-slideright_fadein flex flex-col text-justify"
                            >
                                <div
                                    className="duration-300"
                                    data-class-in="translate-x-0 opacity-100"
                                    data-class-out="-translate-x-32 opacity-0">
                                    <p className="text-sm sm:text-xl text-accent-dark my-8">VTCT regulates the Level 7
                                        Diploma
                                        in
                                        injectables.
                                        This
                                        qualification is available for doctors, dentists, nurses and medical trainees
                                        who
                                        hold a
                                        certain medical education and are willing to improve in medical aesthetics.
                                    </p>
                                    <p className="mb-4">You will get all the information you need about anti-wrinkle and
                                        face
                                        contouring. With the
                                        training you will also get the skills to perform the respected tasks with
                                        hyaluronic
                                        acid
                                        fillers and other aesthetic treatments, safely and efficiently.</p>
                                    <p>The diploma will be delivered with proficiency to allow for thorough
                                        understanding
                                        and
                                        qualification.</p>
                                </div>
                                <div
                                    onClick={openModal}
                                    className="fixed bottom-0 right-0 mx-8 z-10 button my-8 self-center lg:self-start sm:relative sm:mx-0">
                                    <p>Book Now</p>
                                    <ChevronDoubleRightIcon className="animate-pulse w-4 h-auto"/>
                                </div>
                            </div>
                            <div className="animate-slideleft_fadein duration-300 aspect-w-16 aspect-h-9 xl:mFx-8"
                                 data-class-in="translate-x-0 opacity-100"
                                 data-class-out="translate-x-32 opacity-0"
                            >
                                <iframe src={data.youtubeURL}
                                        className="w-full rounded-xl"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden mt-16 cursor-pointer lg:flex flex-col items-center justify-center"
                         onClick={() => {
                             details.current.scrollIntoView()
                         }}>
                        <p className="mb-4 text-xs font-bold text-accent-dark">Scroll for more information</p>
                        <ChevronDoubleDownIcon className="w-12 animate-bounce h-auto text-secondary"/>
                    </div>
                </div>

                <div ref={details}
                     className="container mx-auto section section-screen items-center justify-center">
                    <h1 className="mb-4">STRUCTURE OF THE LEVEL 7 DIPLOMA IN INJECTABLES FOR MEDICAL AESTHETIC
                        TREATMENTS</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        {data.structure.map(StructureCard)}
                    </div>
                </div>

                <div className="container mx-auto section">
                    <h1 className="mb-4">WHY CHOOSE LONDON AESTHETICS FOR YOUR LEVEL 7 DIPLOMA IN INJECTABLES?</h1>
                    <div className="duration-300"
                         data-class-in="translate-x-0 opacity-100"
                         data-class-out="translate-x-32 opacity-0">
                        <ul className="list-disc pl-8">
                            {data.whyChoose.map((why, i) =>
                                <li key={i}>{why}</li>
                            )}
                        </ul>
                    </div>

                    <div className="mt-4 duration-300"
                         data-class-in="translate-x-0 opacity-100"
                         data-class-out="translate-x-32 opacity-0">
                        <h2 className="mb-2">Home Assessment and Gained Qualifications</h2>
                        <p>The completion of a portfolio is needed to be handed in within the completion of the course
                            for
                            the assessment.
                            <br/>With completion of the course, you will receive the following certificate:</p>
                        <ul className="list-disc pl-8 pt-4">
                            <li>VTCT Level 7 Diploma in Injectables</li>
                            <li>London Aesthetics academy certificate</li>
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto section overflow-hidden">
                    <h1 className="mb-4">FREQUENTLY ASKED QUESTIONS</h1>
                    <div className='duration-300 sm:m-8 rounded overflow-hidden'
                         data-class-in="translate-x-0 opacity-100"
                         data-class-out="-translate-x-32 opacity-0">
                        {data.faq.map(Accordion)}
                    </div>
                </div>

                <div className="container mx-auto section">
                    <h1 className="mb-8">OUR CLINICAL LEADS</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {data.team.map(TeamMemberCard)}
                    </div>
                </div>
            </div>
            <Footer/>
            <BookCourseDialog
                isOpen={isOpenModal}
                closeModal={closeModal}
                courseTitle={"Level 7 diploma in injectables for medical aesthetic treatment"}
            />
        </>
    )
}
