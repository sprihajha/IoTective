export interface Device {
  name: string;
  brand: string;
  category: string;
  image: string;
  usage: {
    pii: {
      query_response: string;
      sources: string;
    };
    camera: {
      query_response: string;
      sources: string;
    };
    microphone: {
      query_response: string;
      sources: string;
    };
    name: {
      query_response: string;
      sources: string;
    };
    email: {
      query_response: string;
      sources: string;
    };
    age: {
      query_response: string;
      sources: string;
    };
    phone: {
      query_response: string;
      sources: string;
    };
    geolocation: {
      query_response: string;
      sources: string;
    };
    biometric: {
      query_response: string;
      sources: string;
    };
    ipAddress: {
      query_response: string;
      sources: string;
    };
    socialAccounts: {
      query_response: string;
      sources: string;
    };
    thirdPartyAccounts: {
      query_response: string;
      sources: string;
    };
    voiceRecordings: {
      query_response: string;
      sources: string;
    };
    videoRecordings: {
      query_response: string;
      sources: string;
    };
    roomMapping: {
      query_response: string;
      sources: string;
    };
    interactions: {
      query_response: string;
      sources: string;
    };
    behaviors: {
      query_response: string;
      sources: string;
    };
    analytics: {
      query_response: string;
      sources: string;
    };
    contactSync: {
      query_response: string;
      sources: string;
    };
  };
  connectivity: {
    cellular: {
      query_response: string;
      sources: string;
    };
    wifi: {
      query_response: string;
      sources: string;
    };
    bluetooth: {
      query_response: string;
      sources: string;
    };
  };
  sharing: {
    thirdParty: {
      query_response: string;
      sources: string;
    };
    categories: {
      query_response: string;
      sources: string;
    };
    purpose: {
      query_response: string;
      sources: string;
    };
    anonymized: {
      query_response: string;
      sources: string;
    };
    samePrivacy: {
      query_response: string;
      sources: string;
    };
    contractLimits: {
      query_response: string;
      sources: string;
    };
    notification: {
      query_response: string;
      sources: string;
    };
    reidentifying: {
      query_response: string;
      sources: string;
    };
    transfer: {
      query_response: string;
      sources: string;
    };
  };
  social: {
    verifiedUsers: {
      query_response: string;
      sources: string;
    };
    publicDisplay: {
      query_response: string;
      sources: string;
    };
    moderated: {
      query_response: string;
      sources: string;
    };
    externalLinks: {
      query_response: string;
      sources: string;
    };
    deleteFromThirdParty: {
      query_response: string;
      sources: string;
    };
  };
  tracking: {
    targetAds: {
      query_response: string;
      sources: string;
    };
    profiles: {
      query_response: string;
      sources: string;
    };
    filtered: {
      query_response: string;
      sources: string;
    };
    doNotTrack: {
      query_response: string;
      sources: string;
    };
  };
  controls: {
    createContent: {
      query_response: string;
      sources: string;
    };
    ownership: {
      query_response: string;
      sources: string;
    };
    access: {
      query_response: string;
      sources: string;
    };
    dataModify: {
      query_response: string;
      sources: string;
    };
    retention: {
      query_response: string;
      sources: string;
    };
    dataDelete: {
      query_response: string;
      sources: string;
    };
    termination: {
      query_response: string;
      sources: string;
    };
    restrictAccess: {
      query_response: string;
      sources: string;
    };
    download: {
      query_response: string;
      sources: string;
    };
    privacySettings: {
      query_response: string;
      sources: string;
    };
    limitedUse: {
      query_response: string;
      sources: string;
    };
    combineThirdParty: {
      query_response: string;
      sources: string;
    };
    combinedPii: {
      query_response: string;
      sources: string;
    };
  };
  consent: {
    change: {
      query_response: string;
      sources: string;
    };
    grievance: {
      query_response: string;
      sources: string;
    };
    legalRequest: {
      query_response: string;
      sources: string;
    };
    optIn: {
      query_response: string;
      sources: string;
    };
    optOut: {
      query_response: string;
      sources: string;
    };
    copyright: {
      query_response: string;
      sources: string;
    };
    legacy: {
      query_response: string;
      sources: string;
    };
    parental: {
      query_response: string;
      sources: string;
    };
  };
  security: {
    identity: {
      query_response: string;
      sources: string;
    };
    accountCreation: {
      query_response: string;
      sources: string;
    };
    managedAccounts: {
      query_response: string;
      sources: string;
    };
    multiFactor: {
      query_response: string;
      sources: string;
    };
    employeeAccess: {
      query_response: string;
      sources: string;
    };
    dataTransit: {
      query_response: string;
      sources: string;
    };
    dataStorage: {
      query_response: string;
      sources: string;
    };
    breachNotice: {
      query_response: string;
      sources: string;
    };
    storageLocation: {
      query_response: string;
      sources: string;
    };
    storageDuration: {
      query_response: string;
      sources: string;
    };
    vulnerabilities: {
      query_response: string;
      sources: string;
    };
    securityUpdates: {
      query_response: string;
      sources: string;
    };
    passwordComplexity: {
      query_response: string;
      sources: string;
    };
  };
  privacyCompliance: {
    complianceAudits: {
      query_response: string;
      sources: string;
    };
    defaultPrivacy: {
      query_response: string;
      sources: string;
    };
    calOPPA: {
      query_response: string;
      sources: string;
    };
    coppa: {
      query_response: string;
      sources: string;
    };
    ferpa: {
      query_response: string;
      sources: string;
    };
    sopipa: {
      query_response: string;
      sources: string;
    };
    gdpr: {
      query_response: string;
      sources: string;
    };
    policyVersion: {
      query_response: string;
      sources: string;
    };
    policyChangeLog: {
      query_response: string;
      sources: string;
    };
    policyUpdateNotification: {
      query_response: string;
      sources: string;
    };
    policyCoverage: {
      query_response: string;
      sources: string;
    };
    policyContact: {
      query_response: string;
      sources: string;
    };
    policyPrinciples: {
      query_response: string;
      sources: string;
    };
    policyLanguages: {
      query_response: string;
      sources: string;
    };
    prohibitedActivities: {
      query_response: string;
      sources: string;
    };
    classActionWaiver: {
      query_response: string;
      sources: string;
    };
    internationalData: {
      query_response: string;
      sources: string;
    };
  };
  intendedUsers: {
    children: {
      query_response: string;
      sources: string;
    };
    teens: {
      query_response: string;
      sources: string;
    };
    adults: {
      query_response: string;
      sources: string;
    };
    parents: {
      query_response: string;
      sources: string;
    };
    students: {
      query_response: string;
      sources: string;
    };
    teachers: {
      query_response: string;
      sources: string;
    };
  };
}
