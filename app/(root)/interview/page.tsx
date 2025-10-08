// import Image from "next/image";
// import { redirect } from "next/navigation";
//
// import Agent from "@/components/Agent";
// import DisplayTechIcons from "@/components/DisplayTechIcons";
// import { getRandomInterviewCover } from "@/lib/utils";
// import {
//     getFeedbackByInterviewId,
//     getInterviewById,
// } from "@/lib/actions/general.action";
// import { getCurrentUser } from "@/lib/actions/auth.action";
//
// const InterviewDetails = async ({ params }: { params: { id: string } }) => {
//
// // const InterviewDetails = async ({ params }: RouteParams) => {
// //     const { id } = await params;
//     const { id } = params;
//
//     const user = await getCurrentUser();
//     const interview = await getInterviewById(id);
//     if (!interview) redirect("/");
//
//     const feedback = await getFeedbackByInterviewId({
//         interviewId: id,
//         userId: user?.id!,
//     });
//
//     return (
//         <>
//             <div className="flex flex-row gap-4 justify-between">
//                 <div className="flex flex-row gap-4 items-center max-sm:flex-col">
//                     <div className="flex flex-row gap-4 items-center">
//                         <Image
//                             src={getRandomInterviewCover()}
//                             alt="cover-image"
//                             width={40}
//                             height={40}
//                             className="rounded-full object-cover size-[40px]"
//                         />
//                         <h3 className="capitalize">{interview.role} Interview</h3>
//                     </div>
//
//                     <DisplayTechIcons techStack={interview.techstack} />
//                 </div>
//
//                 <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
//                     {interview.type}
//                 </p>
//             </div>
//
//             <Agent
//                 userName={user?.name!}
//                 userId={user?.id}
//                 interviewId={id}
//                 type="interview"
//                 questions={interview.questions}
//                 feedbackId={feedback?.id}
//             />
//         </>
//     );
// };
//
// export default InterviewDetails;
//
//Working module below
// import Image from "next/image";
// import { redirect } from "next/navigation";
//
// import Agent from "@/components/Agent";
// import DisplayTechIcons from "@/components/DisplayTechIcons";
// import { getRandomInterviewCover } from "@/lib/utils";
// import {
//     getFeedbackByInterviewId,
//     getInterviewById,
// } from "@/lib/actions/general.action";
// import { getCurrentUser } from "@/lib/actions/auth.action";
//
// interface InterviewDetailsProps {
//     params: {
//         id: string;
//     };
// }
//
// const InterviewDetails = async ({ params }: InterviewDetailsProps) => {
//     const { id } = params; // ✅ FIXED: No await here
//
//     // Guard clause: check for a valid ID
//     if (!id || typeof id !== "string" || id.trim() === "") {
//         console.error("Invalid interview ID:", id);
//         redirect("/");
//     }
//
//     const user = await getCurrentUser();
//     const interview = await getInterviewById(id);
//
//     if (!interview) {
//         console.error("Interview not found for ID:", id);
//         redirect("/");
//     }
//
//     const feedback = await getFeedbackByInterviewId({
//         interviewId: id,
//         userId: user?.id!,
//     });
//
//     return (
//         <>
//             <div className="flex flex-row gap-4 justify-between">
//                 <div className="flex flex-row gap-4 items-center max-sm:flex-col">
//                     <div className="flex flex-row gap-4 items-center">
//                         <Image
//                             src={getRandomInterviewCover()}
//                             alt="cover-image"
//                             width={40}
//                             height={40}
//                             className="rounded-full object-cover size-[40px]"
//                         />
//                         <h3 className="capitalize">{interview.role} Interview</h3>
//                     </div>
//                     <DisplayTechIcons techStack={interview.techstack} />
//                 </div>
//                 <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
//                     {interview.type}
//                 </p>
//             </div>
//
//             <Agent
//                 userName={user?.name!}
//                 userId={user?.id}
//                 interviewId={id}
//                 type="interview"
//                 questions={interview.questions}
//                 feedbackId={feedback?.id}
//             />
//         </>
//     );
// };
//
// export default InterviewDetails;

import React from 'react'
import Agent from "@/components/Agent";
const Page = () => {
    return (
        <>
            <h3>Interview Generation</h3>
            <Agent userName="You" userId="user1" type="generate" />
        </>
    )
}
export default Page
