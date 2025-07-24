// import React from 'react'
// import Agent from "@/components/Agent";
//
// const Page = () => {
//     return (
//         <>
//             <h3>Interview Generation</h3>
//             <Agent userName="You" userId='user1' type="gerenrate" />
//         </>
//
//
// )
// }
// export default Page
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview generation</h3>

            <Agent
                userName={user?.name!}
                userId={user?.id}
                profileImage={user?.profileURL}
                type="generate"
                workflowId={process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!}
            />
        </>
    );
};

export default Page;
