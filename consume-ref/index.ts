import * as pulumi from "@pulumi/pulumi";

const stackRef = new pulumi.StackReference("pierskarsenbarg/create-ref/dev");

const petName = stackRef.getOutput("petName");
const password = stackRef.getOutput("passwordValue");

export const consumedPetName = petName;
export const consumedPassword = password;
