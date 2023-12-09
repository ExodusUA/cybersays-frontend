import React, { useEffect, useRef } from 'react';

function ProgressBar() {
    const gradientId = 'progressGradient';

    const gradientStops = [
        { offset: '0%', color: '#63DEA8', opacity: 1 },
        { offset: '100%', color: '#DFE758', opacity: 1 },
    ];

    const animateRef = useRef();
    const percentage = 60;

    useEffect(() => {
        if (animateRef.current) {
            animateRef.current.beginElement();
        }
    }, [percentage]);
    return (
        <div>
            <svg width="770" height="307" viewBox="0 0 770 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                <svg width="750" height="307" viewBox="0 0 770 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id={gradientId} x1="26.431" y1="0.378903" x2="453.103" y2="70.8617" gradientUnits="userSpaceOnUse">
                            {gradientStops.map((stop, index) => (
                                <stop key={index} offset={stop.offset} stopColor={stop.color} />
                            ))}
                        </linearGradient>
                    </defs>

                    <g filter="url(#filter0_d_457_11253)">
                        <path d="M42.6552 75.3789H727.345L750 145.862H20L42.6552 75.3789Z" fill={`url(#${gradientId})`} />
                    </g>


                    <rect x="20" y="145.863" width={`${percentage}%`} height="110" fill={`url(#${gradientId})`} />
                </svg>
                <g filter="url(#filter0_d_457_11253)">
                    <svg width="750" height="307" viewBox="0 0 770 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id={gradientId} x1="26.431" y1="0.378903" x2="453.103" y2="70.8617" gradientUnits="userSpaceOnUse">
                                {gradientStops.map((stop, index) => (
                                    <stop key={index} offset={stop.offset} stopColor={stop.color} />
                                ))}
                            </linearGradient>
                        </defs>

                        <g filter="url(#filter0_d_457_11253)">
                            <path d="M42.6552 75.3789H727.345L750 145.862H20L42.6552 75.3789Z" fill={`url(#${gradientId})`} />
                        </g>

                        <rect x="20" y="145.863" width={`750px`} height="110" fill={`url(#${gradientId})`} />

                        <rect x="20" y="145.863" width={`700px`} height="110" fill={`url(#${gradientId})`} />
                    </svg>
                    <path d="M42.6552 75.3789H727.345L750 145.862H20L42.6552 75.3789Z" fill="url(#paint0_linear_457_11257)" />
                    <defs>
                        <linearGradient id="paint0_linear_457_11257" x1="26.431" y1="0.378903" x2="453.103" y2="70.8617" gradientUnits="userSpaceOnUse">
                            <stop offset="0.343102" stop-color="#63DEA8" />
                            <stop offset="1" stop-color="#EEE74E" />
                        </linearGradient>
                    </defs>


                    <path d="M20 145.863H750L724.828 256.622H45.1724L20 145.863Z" fill="url(#paint1_linear_457_11253)" />
                    <path d="M20 145.863H750L724.828 256.622H45.1724L20 145.863Z" fill="url(#paint2_linear_457_11253)" fill-opacity="0.2" />
                    <g filter="url(#filter1_f_457_11253)">
                        <path d="M42.6552 75.3789H458L469.328 145.862H20L42.6552 75.3789Z" fill="url(#paint3_linear_457_11253)" fill-opacity="0.8" />
                    </g>
                    <path d="M42.6552 75.3789H458L469.328 145.862H20L42.6552 75.3789Z" fill="url(#paint4_linear_457_11253)" />
                    <g filter="url(#filter2_f_457_11253)">
                        <path d="M20 145.863H469.328L458 256.622H45.1724L20 145.863Z" fill="url(#paint5_linear_457_11253)" fill-opacity="0.8" />
                        <path d="M20 145.863H469.328L458 256.622H45.1724L20 145.863Z" fill="url(#paint6_linear_457_11253)" fill-opacity="0.2" />
                    </g>
                    <path d="M20 145.863H469.328L458 256.622H45.1724L20 145.863Z" fill="url(#paint7_linear_457_11253)" />
                    <path d="M20 145.863H469.328L458 256.622H45.1724L20 145.863Z" fill="url(#paint8_linear_457_11253)" fill-opacity="0.2" />
                    <path d="M615.509 75.9199L627.656 145.762H632.012L615.509 75.9199Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M657.183 75.9199L669.331 145.762H673.686L657.183 75.9199Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M698.858 75.9199L711.006 145.762H715.361L698.858 75.9199Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M576.012 75.9199L585.982 145.762H590.337L576.012 75.9199Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M538.694 75.9199L546.485 145.762H550.84L538.694 75.9199Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M502.296 75.3789L509.166 145.761H513.521L502.296 75.3789Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M465.224 75.9199L472.768 145.762H477.123L465.224 75.9199Z" fill="#787878" fill-opacity="0.2" />
                    <path d="M430.331 75.9185L435.697 145.761H440.053L430.331 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M397.952 75.9185L400.803 145.761H405.159L397.952 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M155.093 75.9185L142.946 145.761H138.59L155.093 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M113.419 75.9185L101.271 145.761H96.9158L113.419 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M71.744 75.9185L59.5965 145.761H55.2412L71.744 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M194.59 75.9185L184.62 145.761H180.265L194.59 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M231.908 75.9185L224.117 145.761H219.762L231.908 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M268.306 75.3789L261.436 145.761H257.08L268.306 75.3789Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M305.377 75.9185L297.833 145.761H293.478L305.377 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M340.271 75.9185L334.905 145.761H330.55L340.271 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M372.65 75.9185L369.799 145.761H365.443L372.65 75.9185Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M615.509 255.773L627.656 145.864H632.012L615.509 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M657.183 255.773L669.331 145.864H673.686L657.183 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M698.858 255.773L711.006 145.864H715.361L698.858 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M576.012 255.773L585.982 145.864H590.337L576.012 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M538.694 255.773L546.485 145.864H550.84L538.694 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M502.296 256.621L509.166 145.862H513.521L502.296 256.621Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M465.224 255.773L472.768 145.864H477.123L465.224 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M430.331 255.773L435.697 145.864H440.052L430.331 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M397.952 255.773L400.803 145.864H405.159L397.952 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M155.093 255.773L142.945 145.864H138.59L155.093 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M113.418 255.773L101.271 145.864H96.9155L113.418 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M71.7435 255.773L59.596 145.864H55.2407L71.7435 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M194.589 255.773L184.62 145.864H180.265L194.589 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M231.908 255.773L224.117 145.864H219.761L231.908 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M268.305 256.621L261.435 145.862H257.08L268.305 256.621Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M305.376 255.773L297.832 145.864H293.478L305.376 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M340.271 255.773L334.905 145.864H330.549L340.271 255.773Z" fill="#787878" fill-opacity="0.3" />
                    <path d="M372.65 255.773L369.798 145.864H365.443L372.65 255.773Z" fill="#787878" fill-opacity="0.3" />
                </g>
                <defs>
                    <filter id="filter0_d_457_11253" x="-10.2069" y="54.8621" width="790.414" height="242.414" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="10.069" />
                        <feGaussianBlur stdDeviation="15.1034" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.140059 0 0 0 0 0.0965088 0 0 0 0 0.18361 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_457_11253" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_457_11253" result="shape" />
                    </filter>
                    <filter id="filter1_f_457_11253" x="-55.5172" y="-0.138329" width="600.362" height="221.517" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="37.7586" result="effect1_foregroundBlur_457_11253" />
                    </filter>
                    <filter id="filter2_f_457_11253" x="-30.3448" y="95.5185" width="550.017" height="211.447" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="25.1724" result="effect1_foregroundBlur_457_11253" />
                    </filter>
                </defs>


            </svg>


        </div>
    )
}

export default ProgressBar