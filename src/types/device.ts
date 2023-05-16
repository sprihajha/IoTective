export interface Device {
  name: string;
  brand: string;
  category: string;
  image: string;
  usage: {
    faq: {
      query: string;
      query_response: string;
      sources: string;
    };
    pii: {
      query: string;
      query_response: string;
      sources: string;
    };
    camera: {
      query: string;
      query_response: string;
      sources: string;
    };
    microphone: {
      query: string;
      query_response: string;
      sources: string;
    };
    name: {
      query: string;
      query_response: string;
      sources: string;
    };
    email: {
      query: string;
      query_response: string;
      sources: string;
    };
    age: {
      query: string;
      query_response: string;
      sources: string;
    };
    phone: {
      query: string;
      query_response: string;
      sources: string;
    };
    geolocation: {
      query: string;
      query_response: string;
      sources: string;
    };
    biometric: {
      query: string;
      query_response: string;
      sources: string;
    };
    ipAddress: {
      query: string;
      query_response: string;
      sources: string;
    };
    socialAccounts: {
      query: string;
      query_response: string;
      sources: string;
    };
    thirdPartyAccounts: {
      query: string;
      query_response: string;
      sources: string;
    };
    voiceRecordings: {
      query: string;
      query_response: string;
      sources: string;
    };
    videoRecordings: {
      query: string;
      query_response: string;
      sources: string;
    };
    roomMapping: {
      query: string;
      query_response: string;
      sources: string;
    };
    interactions: {
      query: string;
      query_response: string;
      sources: string;
    };
    behaviors: {
      query: string;
      query_response: string;
      sources: string;
    };
    analytics: {
      query: string;
      query_response: string;
      sources: string;
    };
    contactSync: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  connectivity: {
    cellular: {
      query: string;
      query_response: string;
      sources: string;
    };
    wifi: {
      query: string;
      query_response: string;
      sources: string;
    };
    bluetooth: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  sharing: {
    thirdParty: {
      query: string;
      query_response: string;
      sources: string;
    };
    categories: {
      query: string;
      query_response: string;
      sources: string;
    };
    purpose: {
      query: string;
      query_response: string;
      sources: string;
    };
    anonymized: {
      query: string;
      query_response: string;
      sources: string;
    };
    samePrivacy: {
      query: string;
      query_response: string;
      sources: string;
    };
    contractLimits: {
      query: string;
      query_response: string;
      sources: string;
    };
    notification: {
      query: string;
      query_response: string;
      sources: string;
    };
    reidentifying: {
      query: string;
      query_response: string;
      sources: string;
    };
    transfer: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  social: {
    verifiedUsers: {
      query: string;
      query_response: string;
      sources: string;
    };
    publicDisplay: {
      query: string;
      query_response: string;
      sources: string;
    };
    moderated: {
      query: string;
      query_response: string;
      sources: string;
    };
    externalLinks: {
      query: string;
      query_response: string;
      sources: string;
    };
    deleteFromThirdParty: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  tracking: {
    targetAds: {
      query: string;
      query_response: string;
      sources: string;
    };
    profiles: {
      query: string;
      query_response: string;
      sources: string;
    };
    filtered: {
      query: string;
      query_response: string;
      sources: string;
    };
    doNotTrack: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  controls: {
    createContent: {
      query: string;
      query_response: string;
      sources: string;
    };
    ownership: {
      query: string;
      query_response: string;
      sources: string;
    };
    access: {
      query: string;
      query_response: string;
      sources: string;
    };
    dataModify: {
      query: string;
      query_response: string;
      sources: string;
    };
    retention: {
      query: string;
      query_response: string;
      sources: string;
    };
    dataDelete: {
      query: string;
      query_response: string;
      sources: string;
    };
    termination: {
      query: string;
      query_response: string;
      sources: string;
    };
    restrictAccess: {
      query: string;
      query_response: string;
      sources: string;
    };
    download: {
      query: string;
      query_response: string;
      sources: string;
    };
    privacySettings: {
      query: string;
      query_response: string;
      sources: string;
    };
    limitedUse: {
      query: string;
      query_response: string;
      sources: string;
    };
    combineThirdParty: {
      query: string;
      query_response: string;
      sources: string;
    };
    combinedPii: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  consent: {
    change: {
      query: string;
      query_response: string;
      sources: string;
    };
    grievance: {
      query: string;
      query_response: string;
      sources: string;
    };
    legalRequest: {
      query: string;
      query_response: string;
      sources: string;
    };
    optIn: {
      query: string;
      query_response: string;
      sources: string;
    };
    optOut: {
      query: string;
      query_response: string;
      sources: string;
    };
    copyright: {
      query: string;
      query_response: string;
      sources: string;
    };
    legacy: {
      query: string;
      query_response: string;
      sources: string;
    };
    parental: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  security: {
    identity: {
      query: string;
      query_response: string;
      sources: string;
    };
    accountCreation: {
      query: string;
      query_response: string;
      sources: string;
    };
    managedAccounts: {
      query: string;
      query_response: string;
      sources: string;
    };
    multiFactor: {
      query: string;
      query_response: string;
      sources: string;
    };
    employeeAccess: {
      query: string;
      query_response: string;
      sources: string;
    };
    dataTransit: {
      query: string;
      query_response: string;
      sources: string;
    };
    dataStorage: {
      query: string;
      query_response: string;
      sources: string;
    };
    breachNotice: {
      query: string;
      query_response: string;
      sources: string;
    };
    storageLocation: {
      query: string;
      query_response: string;
      sources: string;
    };
    storageDuration: {
      query: string;
      query_response: string;
      sources: string;
    };
    vulnerabilities: {
      query: string;
      query_response: string;
      sources: string;
    };
    securityUpdates: {
      query: string;
      query_response: string;
      sources: string;
    };
    passwordComplexity: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  privacyCompliance: {
    complianceAudits: {
      query: string;
      query_response: string;
      sources: string;
    };
    defaultPrivacy: {
      query: string;
      query_response: string;
      sources: string;
    };
    calOPPA: {
      query: string;
      query_response: string;
      sources: string;
    };
    coppa: {
      query: string;
      query_response: string;
      sources: string;
    };
    ferpa: {
      query: string;
      query_response: string;
      sources: string;
    };
    gdpr: {
      query: string;
      query_response: string;
      sources: string;
    };
    policyVersion: {
      query: string;
      query_response: string;
      sources: string;
    };
    policyChangeLog: {
      query: string;
      query_response: string;
      sources: string;
    };
    policyUpdateNotification: {
      query: string;
      query_response: string;
      sources: string;
    };
    policyCoverage: {
      query: string;
      query_response: string;
      sources: string;
    };
    policyContact: {
      query: string;
      query_response: string;
      sources: string;
    };
    policyPrinciples: {
      query: string;
      query_response: string;
      sources: string;
    };
    policyLanguages: {
      query: string;
      query_response: string;
      sources: string;
    };
    prohibitedActivities: {
      query: string;
      query_response: string;
      sources: string;
    };
    classActionWaiver: {
      query: string;
      query_response: string;
      sources: string;
    };
    internationalData: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  intendedUsers: {
    children: {
      query: string;
      query_response: string;
      sources: string;
    };
    teens: {
      query: string;
      query_response: string;
      sources: string;
    };
    adults: {
      query: string;
      query_response: string;
      sources: string;
    };
    parents: {
      query: string;
      query_response: string;
      sources: string;
    };
  };
  [key: string]: any; // index signature
}
