import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
        <section className="card-cta">
            <div className="flex flex-col gap-6 max-w-lg">
                <h2>Get Interview Ready with AI-powered Practice & Feedback</h2>
                <p className="text-lg">Practice on real Interview Questions & get instant Feedback.</p>
                <Button asChild className="btn-primary max-sm:w-full">
                    <Link href="/interview">Start an Interview</Link>
                </Button>
            </div>

            <Image
                src="/img_1.png"
                alt="robo-dude"
                width={0}
                height={0}
                sizes="(max-width: 720px) 100vw, 400px"
                className="w-full max-w-[400px] h-auto rounded-2xl border-[6px] border-white outline outline-[3px] outline-white/70 shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] hover:scale-105 transition-transform duration-300 ease-in-out"
            />
        </section>

            <section className="flex flex-col gap-6 mt-8 ">
                <h2>Your Interviews</h2>
                <div className="interviews-section">

                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id}
                        />
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8 ">
                <h2>Take an Interview </h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id}
                                        />
                    ))}
                    {/*<p>You haven&apos;t taken any interviews yet!</p>*/}
                </div>
            </section>
        </>
    )
}
export default Page
