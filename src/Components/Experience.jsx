import { BiPencil } from "react-icons/bi";
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
import { fetchExperiences } from '../apicalls'
import { useEffect, useState } from "react"

export default function Experience() {

    const [experiences, setExperiences] = useState({});

    useEffect(() => {
        fetchExperiences('_id').then((res) => setExperiences(res))
    }, [])

    return (
        <div id="Central-Second"
            className="col-2 col-md-10 Central-container d-flex flex-column justify-content-start mt-4 mx-auto ml-3 py-4"
        >
            <div className="d-flex flex-row justify-content-between mx-2">
                <h4 className="text-semibold">Experience</h4>
                <AiOutlinePlus className="Central-Plus-Icon mb-4" />
            </div>

            <div className="d-flex justify-content-between">
                <div>
                {/* {experiences && experiences.map((experience) => ( */}
                    <>
                    <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                        <img
                            className="Central-random-post-img cursor-pointer"
                            src="https://th.bing.com/th/id/OIP.0MG3R0maOfwdsab0MDOcywHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7"
                            alt=""
                        />
                        <div className="mt-3 cursor-pointer">
                            <a className="Central-decoration-none" href="#">
                                <p className="Central-p1 font-bolder mx-4">
                                    Some random Working experience.
                                    <p className="text-muted">
                                        Name Company where Name Username worked for
                                        <br /> Period from... to... when Name Username worked
                                        for
                                        <br /> Location Company where Name Username worked at
                                    </p>
                                </p>
                            </a>
                        </div>
                    </div>
                    <hr />
                    </>
               {/*  ))} */}
                   
                </div>

                <BiPencil id="" className="Central-pencil2" />
            </div>

            {/* Start Education Section */}
            <hr />
            <div className="d-flex flex-row justify-content-between mx-2 mt-3">
                <h4 className="text-semibold">Education</h4>
                <AiOutlinePlus className="Central-Plus-Icon mb-4" />
            </div>

            <div className="d-flex justify-content-between">
                <div>
                    <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                        <img
                            className="Central-random-post-img cursor-pointer"
                            src="https://th.bing.com/th/id/OIP.aYDYDAPxRyTQ9yRbV-ps3wAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7"
                            alt=""
                        />
                        <div className="mt-3 cursor-pointer">
                            <a className="Central-decoration-none" href="#">
                                <p className="Central-p1 font-bolder mx-4">
                                    Strive School
                                    <p className="text-muted">
                                        FrontEnd
                                        <br /> 2021
                                    </p>
                                </p>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                        <img
                            className="Central-random-post-img cursor-pointer"
                            src="https://th.bing.com/th/id/OIP.QPXu4Znw-lVZad4i9g2VwgHaG-?w=193&h=182&c=7&r=0&o=5&pid=1.7"
                            alt=""
                        />
                        <div className="mt-3 cursor-pointer">
                            <a className="Central-decoration-none" href="#">
                                <p className="Central-p1 font-bolder mx-4">
                                    Radford University
                                    <p className="text-muted">
                                        Languages and advances avances for advertisment advices
                                        <br /> Activities and Secret blood societies
                                    </p>
                                </p>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                        <img
                            className="Central-random-post-img cursor-pointer"
                            src="https://th.bing.com/th/id/OIP.aYDYDAPxRyTQ9yRbV-ps3wAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7"
                            alt=""
                        />
                        <div className="mt-3 cursor-pointer">
                            <a className="Central-decoration-none" href="#">
                                <p className="Central-p1 font-bolder mx-4">
                                    Strive School
                                    <p className="text-muted">
                                        FrontEnd
                                        <br /> 2021
                                    </p>
                                </p>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                        <img
                            className="Central-random-post-img cursor-pointer"
                            src="https://th.bing.com/th/id/OIP.QPXu4Znw-lVZad4i9g2VwgHaG-?w=193&h=182&c=7&r=0&o=5&pid=1.7"
                            alt=""
                        />
                        <div className="mt-3 cursor-pointer">
                            <a className="Central-decoration-none" href="#">
                                <p className="Central-p1 font-bolder mx-4">
                                    Radford University
                                    <p className="text-muted">
                                        Languages and advances avances for advertisment advices
                                        <br /> Activities and Secret blood societies
                                    </p>
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex my-3 align-items-center justify-content-start ml-2 Central-Shadow-Squared">
                        <p className="text-muted">Show 1 more education</p>
                        <AiOutlineDown className="mb-3 ml-2" />
                    </div>
                </div>

                <BiPencil id="" className="Central-pencil2" />
            </div>
            {/*End Education Section */}
        </div>
    )
}
