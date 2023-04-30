export interface Device {
    id: string,
    name: string;
    image: string;
    dataCollection: {
      camera: boolean;
      microphone: boolean;
      location: boolean;
      userName: boolean;
      email: boolean;
      phone: boolean;
      thirdPartyAccounts: boolean;
      socialAccounts: boolean;
      ipAddress: boolean;
      age: boolean;
      voiceRecordings: boolean;
      roomMapping: boolean;
      videoRecordings: boolean;
      contactSync: boolean;
    };
    dataUsage: {
      advertisingCompanies: string[];
      trackers: string[];
      piiDataCollection: boolean;
      advertisementId: boolean;
      dataSelling: boolean;
      anonymizedData: boolean;
      defaultPrivacyControls: boolean;
      coppaPolicy: boolean;
    };
    dataStorage: {
      deviceStorage: boolean;
      appStorage: boolean;
      userDeletion: boolean;
      deletionDifficulty: boolean;
    };
    dataSecurity: {
      encryptedDataSharing: boolean;
      knownVulnerabilities: string[];
      securityUpdates: string;
      supports2fa: boolean;
      passwordComplexity: boolean;
    };
  }
  