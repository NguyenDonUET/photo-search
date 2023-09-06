import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingSkeletonImage() {
    return (
        <SkeletonTheme
            baseColor="hsl(200, 20%, 80%)"
            highlightColor=" hsl(200, 20%, 95%)"
        >
            <Skeleton className="max-w-full w-full h-[200px] rounded-lg block " />
        </SkeletonTheme>
    );
}
