export interface Maker {
    hallticket: String;
    fullname: String;
    password: String;
    email: String;
    gender: String;
    mobile: String;
    profilePic: String;
    education: {
        collegeName: String;
        branch: String;
        year: String;
        sem: String;
    };
    project: [{
        projectTitle: String;
        projectDescription: String;
        projectDomain: String;
        projectSubDomain: String;
        projectDuration: {
            startDate: Date;
            endDate: Date;
        }
    }];
    dob: String;
}
