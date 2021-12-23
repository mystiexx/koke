import React, { useState } from "react";
import "./Member.css";
import { addMember } from "../../services/member";
import Files from "react-files";
import { Input, useToast, Box, Select, Button, Image, Flex } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { FcOldTimeCamera } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/media-query";

function Member() {
    const toast = useToast();
    const [fullName, setFullName] = useState("");
    const [talent, setTalent] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    const handleSubmit = async () => {
        setLoading(true);
        const form = new FormData();
        form.append("picture", files[0]);
        form.append("fullName", fullName);
        form.append("talent", talent);
        form.append("email", email);
        form.append("gender", gender);
        form.append("address", address);
        form.append("dateOfBirth", dateOfBirth);
        form.append("phone", phone);

        try {
            let { data } = await addMember(form);

            if (data) {
                toast({
                    title: "Done.",
                    description: "You will contacted shortly",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top-right",
                });
                window.location.href = "/become-a-member";
            }
        } catch (err) {
            toast({
                title: "Failed",
                description: err.message,
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right",
            });
        }
    };

    const FileChange = (files) => {
        setFiles(files);
    };

    const FileError = (error, file) => {
        console.log("error code " + error.code + ": " + error.message);
    };

    return (
        <div className="p-3">
            <Link to="/">Home </Link>
            <Box
                className="p-3"
                w="120%"
                marginLeft={isNotSmallerScreen ? "60px" : "10px"}
                marginTop={isNotSmallerScreen ? '100px'  : '40px'}
            >
                <Flex>
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input
                            type="text"
                            variant="flushed"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl ml={3}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="text"
                            variant="flushed"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                </Flex>

                <FormControl mt={3} mb={3}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                        type="text"
                        variant="flushed"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                        type="text"
                        variant="flushed"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </FormControl>

                <Flex mt={3} mb={3}>
                    <FormControl>
                        <FormLabel>Date of Birth</FormLabel>
                        <Input
                            type="date"
                            variant="flushed"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </FormControl>

                    <FormControl ml={3}>
                        <FormLabel>Gender</FormLabel>
                        <Select
                            placeholder="Select Gender"
                            variant="flushed"
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Select>
                    </FormControl>
                </Flex>

                <Flex mb={3}>
                    <FormControl>
                        <FormLabel>Specialty</FormLabel>
                        <Input
                            type="text"
                            variant="flushed"
                            onChange={(e) => setTalent(e.target.value)}
                        />
                    </FormControl>

                    <div className="files ml-3 mt-3">
                        <Files
                            className="mt-3 mb-3 files-dropzone"
                            onChange={FileChange}
                            onError={FileError}
                            name="fileselect"
                            id="fileselect"
                            accepts={["image/jpg", "image/png", "image/jpeg"]}
                            multiple
                            minFiles={1}
                            maxFiles={5}
                            maxFileSize={1000000}
                            minFileSize={1000}
                            clickable
                        >
                            <Button leftIcon={<FcOldTimeCamera />} variant="solid">
                                Select Images
                            </Button>
                        </Files>
                    </div>
                </Flex>

                <div className="d-flex flex-wrap">
                    {files ? (
                        files.map((file) => (
                            <div key={file.name} className="flex-row">
                                <Image
                                    borderRadius="full"
                                    boxSize="80px"
                                    src={`${file.preview.url}`}
                                    alt="Shop image"
                                />
                            </div>
                        ))
                    ) : (
                        <p>no file selected</p>
                    )}
                </div>

                <Button
                    style={{ background: "#1f2833", color: "#fff", width: "100%" }}
                    onClick={handleSubmit}
                    disabled={loading}
                    isLoading={loading}
                >
                    Join
                </Button>
            </Box>
        </div>
    );
}

export default Member;
