export interface Labresultinterface {
  sampleId: string;
  sampleIdFrom: string;
      specimen: string;
      testMethod: string;
      fat: string;
      recommendation: string;
      diagnosis: string;
      remarks: string;
      labAccession: string;
      dateRecieved: string;
      owner: string;
      address: string;
      sender: string;
      senderAddress: string;
      email: string;
      contactNumber: string;
      dateReported: Date;
      createdAt: Date;
      gender: string;
      behaviorChanges: [
        {
          id: number;
          name: string;
          description: string;
          value: string;
        }
      ];
      otherIllnesses: [
        {
          id: number;
          name: string;
          description: string;
          value: string;
        }
      ];
}
