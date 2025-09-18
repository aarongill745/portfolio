import * as React from 'react';

export default function AboutMe() {
    return (
        <div className="mb-16">
            <div className="pixel-border bg-secondary-background p-6 mb-6">
                <h2 className="text-lg sm:text-xl text-main mb-4 font-pixel uppercase">EXPERIENCE</h2>
                <div className="text-xs sm:text-sm font-pixel">
                    <div className="space-y-4">
                        <div className="pixel-border bg-pixel-blue p-4">
                            <div className="text-main">2023 - NOW</div>
                            <div className="text-foreground mt-1">ACME SOLUTIONS - CEO</div>
                        </div>
                        <div className="pixel-border bg-pixel-green p-4">
                            <div className="text-main">2021 - 2023</div>
                            <div className="text-foreground mt-1">GOOGLE - SOFTWARE ENGINEER</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

