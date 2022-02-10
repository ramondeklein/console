// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import {
  actionsTray,
  containerForHeader,
  searchField,
  spacingUtils,
} from "../Common/FormComponents/common/styleLibrary";
import withStyles from "@mui/styles/withStyles";
import { Box, Button, Link } from "@mui/material";
import PageHeader from "../Common/PageHeader/PageHeader";
import PageLayout from "../Common/Layout/PageLayout";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { CopyIcon, DiagnosticsFeatureIcon, UsersIcon } from "../../../icons";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import OnlineRegistrationIcon from "../../../icons/OnlineRegistrationIcon";
import OfflineRegistrationIcon from "../../../icons/OfflineRegistrationIcon";
import InputBoxWrapper from "../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import OnlineRegistrationBackIcon from "../../../icons/OnlineRegistrationBackIcon";
import OfflineRegistrationBackIcon from "../../../icons/OfflineRegistrationBackIcon";
import api from "../../../common/api";

import {
  SubnetInfo,
  SubnetLoginRequest,
  SubnetLoginResponse,
  SubnetLoginWithMFARequest,
  SubnetOrganization,
  SubnetRegisterRequest,
  SubnetRegTokenResponse,
} from "../License/types";
import { ErrorResponseHandler } from "../../../common/types";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SelectWrapper from "../Common/FormComponents/SelectWrapper/SelectWrapper";
import { hasPermission } from "../../../common/SecureComponent/SecureComponent";
import {
  CONSOLE_UI_RESOURCE,
  IAM_PAGES,
  IAM_PAGES_PERMISSIONS,
} from "../../../common/SecureComponent/permissions";
import { connect } from "react-redux";
import { setErrorSnackMessage } from "../../../actions";
import SettingsIcon from "../../../icons/SettingsIcon";
import RegisterStatus from "./RegisterStatus";
import FormSwitchWrapper from "../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import { AppState } from "../../../store";
import {
  HelpIconFilled,
  CallHomeFeatureIcon,
  PerformanceFeatureIcon,
} from "../../../icons";

interface IRegister {
  classes: any;
  displayErrorMessage: typeof setErrorSnackMessage;
  operatorMode: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    loading: {
      paddingTop: 8,
      paddingLeft: 40,
    },
    buttons: {
      justifyContent: "flex-start",
      gap: 20,
    },
    localMessage: {
      fontSize: 24,
      color: "#07193E",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
    },
    headerStyle: {
      color: theme.palette.primary.main,
      fontSize: 16,
      fontWeight: "bold",
    },
    registerActivationIcon: {
      color: theme.palette.primary.main,
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 20,
      "& .min-icon": {
        width: 32.12,
        height: 25,
        marginRight: 10,
        verticalAlign: "middle",
      },
    },
    registerActivationMode: {
      textAlign: "right",
      "& a": {
        cursor: "pointer",
      },
    },
    subnetDescription: {
      textAlign: "left",
      Font: "normal normal normal 14px/17px Lato",
      letterSpacing: 0,
      color: "#000000",
      "& span": {
        fontWeight: "bold",
      },
    },
    registeredStatus: {
      border: "1px solid #E2E2E2",
      padding: "24px 24px 24px 24px",
      borderRadius: 2,
      marginBottom: 25,
      backgroundColor: "#FBFAFA",
      "& .min-icon": {
        width: 20,
        height: 20,
        marginLeft: 48,
        marginRight: 13,
        verticalAlign: "middle",
        marginTop: -3,
      },
      "& span": {
        fontWeight: "bold",
      },
    },
    offlineRegisterButton: {
      textAlign: "right",
      paddingRight: 20,
    },
    copyInputBox: {
      "& button": {
        border: "1px solid #5E5E5E",
        borderRadius: 2,
      },
    },
    link: {
      color: "#2781B0",
      cursor: "pointer",
    },
    smallBoxy: {
      border: "#E5E5E5 1px solid",
      borderRadius: 2,
      padding: 20,
      backgroundColor: "#fff",
    },
    sizedLabel: {
      minWidth: "75px",
    },
    ...actionsTray,
    ...searchField,
    ...spacingUtils,
    ...containerForHeader(theme.spacing(4)),
  });

const FormTitle = ({ icon = null, title }: { icon?: any; title: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {icon}
      <div className="title-text">{title}</div>
    </Box>
  );
};

const RegisterHelpBox = () => {
  return (
    <Box
      sx={{
        flex: 1,
        border: "1px solid #eaeaea",
        borderRadius: "2px",
        display: "flex",
        flexFlow: "column",
        padding: "20px",
        marginLeft: {
          xs: "0px",
          sm: "0px",
          md: "30px",
        },
        marginTop: {
          xs: "0px",
          sm: "30px",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          marginBottom: "16px",

          "& .min-icon": {
            height: "21px",
            width: "21px",
            marginRight: "15px",
          },
        }}
      >
        <HelpIconFilled />
        <div>Why should I register?</div>
      </Box>
      <Box sx={{ fontSize: "14px", marginBottom: "15px" }}>
        Registering this cluster with the MinIO Subscription Network (SUBNET)
        provides the following benefits in addition to the commercial license
        and SLA backed support.
      </Box>

      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <FeatureItem
          icon={<CallHomeFeatureIcon />}
          description={`Call Home Monitoring`}
        />
        <FeatureItem
          icon={<DiagnosticsFeatureIcon />}
          description={`Health Diagnostics`}
        />
        <FeatureItem
          icon={<PerformanceFeatureIcon />}
          description={`Performance Analysis`}
        />
      </Box>
    </Box>
  );
};
const FeatureItem = ({
  icon,
  description,
}: {
  icon: any;
  description: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        "& .min-icon": {
          marginRight: "10px",
          height: "23px",
          width: "23px",
          marginBottom: "10px",
        },
      }}
    >
      {icon}{" "}
      <div style={{ fontSize: "14px", fontStyle: "italic", color: "#5E5E5E" }}>
        {description}
      </div>
    </Box>
  );
};
const Register = ({
  classes,
  displayErrorMessage,
  operatorMode,
}: IRegister) => {
  const [license, setLicense] = useState<string>("");
  const [subnetPassword, setSubnetPassword] = useState<string>("");
  const [subnetEmail, setSubnetEmail] = useState<string>("");
  const [subnetMFAToken, setSubnetMFAToken] = useState<string>("");
  const [subnetOTP, setSubnetOTP] = useState<string>("");
  const [subnetAccessToken, setSubnetAccessToken] = useState<string>("");
  const [selectedSubnetOrganization, setSelectedSubnetOrganization] =
    useState<string>("");
  const [subnetRegToken, setSubnetRegToken] = useState<string>("");
  const [subnetOrganizations, setSubnetOrganizations] = useState<
    SubnetOrganization[]
  >([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [onlineActivation, setOnlineActivation] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingLicenseInfo, setLoadingLicenseInfo] = useState<boolean>(false);
  const [clusterRegistered, setClusterRegistered] = useState<boolean>(false);
  const [initialLicenseLoading, setInitialLicenseLoading] =
    useState<boolean>(true);
  const [displaySubnetProxy, setDisplaySubnetProxy] = useState<boolean>(false);

  const clearForm = () => {
    setSubnetAccessToken("");
    setSelectedSubnetOrganization("");
    setSubnetRegToken("");
    setShowPassword(false);
    setOnlineActivation(true);
    setSubnetOrganizations([]);
    setLicense("");
    setSubnetPassword("");
    setSubnetEmail("");
    setSubnetMFAToken("");
    setSubnetOTP("");
  };

  const getSubnetInfo = hasPermission(
    CONSOLE_UI_RESOURCE,
    IAM_PAGES_PERMISSIONS[IAM_PAGES.LICENSE],
    true
  );

  const fetchLicenseInfo = useCallback(() => {
    if (loadingLicenseInfo) {
      return;
    }
    if (getSubnetInfo) {
      setLoadingLicenseInfo(true);
      api
        .invoke("GET", `/api/v1/subnet/info`)
        .then((res: SubnetInfo) => {
          setClusterRegistered(true);
          setLoadingLicenseInfo(false);
        })
        .catch((err: ErrorResponseHandler) => {
          if (err.errorMessage !== "License not found") {
            displayErrorMessage(err);
          }
          setClusterRegistered(false);
          setLoadingLicenseInfo(false);
        });
    } else {
      setLoadingLicenseInfo(false);
    }
  }, [loadingLicenseInfo, getSubnetInfo, displayErrorMessage]);

  const fetchSubnetRegToken = () => {
    if (loading || subnetRegToken) {
      return;
    }
    setLoading(true);
    api
      .invoke("GET", "/api/v1/subnet/registration-token")
      .then((resp: SubnetRegTokenResponse) => {
        setLoading(false);
        if (resp && resp.regToken) {
          setSubnetRegToken(resp.regToken);
        }
      })
      .catch((err: ErrorResponseHandler) => {
        console.log(err);
        displayErrorMessage(err);
        setLoading(false);
      });
  };

  const callRegister = (token: string, account_id: string) => {
    const request: SubnetRegisterRequest = {
      token: token,
      account_id: account_id,
    };
    api
      .invoke("POST", "/api/v1/subnet/register", request)
      .then(() => {
        setLoading(false);
        clearForm();
        fetchLicenseInfo();
      })
      .catch((err: ErrorResponseHandler) => {
        displayErrorMessage(err);
        setLoading(false);
      });
  };
  const subnetRegister = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (subnetAccessToken && selectedSubnetOrganization) {
      callRegister(subnetAccessToken, selectedSubnetOrganization);
    }
  };

  const subnetLoginWithMFA = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const request: SubnetLoginWithMFARequest = {
      username: subnetEmail,
      otp: subnetOTP,
      mfa_token: subnetMFAToken,
    };
    api
      .invoke("POST", "/api/v1/subnet/login/mfa", request)
      .then((resp: SubnetLoginResponse) => {
        setLoading(false);
        if (resp && resp.access_token && resp.organizations.length > 0) {
          if (resp.organizations.length === 1) {
            callRegister(
              resp.access_token,
              resp.organizations[0].accountId.toString()
            );
          } else {
            setSubnetAccessToken(resp.access_token);
            setSubnetOrganizations(resp.organizations);
            setSelectedSubnetOrganization(
              resp.organizations[0].accountId.toString()
            );
          }
        }
      })
      .catch((err: ErrorResponseHandler) => {
        displayErrorMessage(err);
        setLoading(false);
        setSubnetOTP("");
      });
  };

  const subnetLogin = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    let request: SubnetLoginRequest = {
      username: subnetEmail,
      password: subnetPassword,
      apiKey: license,
    };
    api
      .invoke("POST", "/api/v1/subnet/login", request)
      .then((resp: SubnetLoginResponse) => {
        setLoading(false);
        if (resp && resp.registered) {
          clearForm();
          fetchLicenseInfo();
        } else if (resp && resp.mfa_token) {
          setSubnetMFAToken(resp.mfa_token);
        } else if (resp && resp.access_token && resp.organizations.length > 0) {
          setSubnetAccessToken(resp.access_token);
          setSubnetOrganizations(resp.organizations);
          setSelectedSubnetOrganization(
            resp.organizations[0].accountId.toString()
          );
        }
      })
      .catch((err: ErrorResponseHandler) => {
        displayErrorMessage(err);
        setLoading(false);
        clearForm();
      });
  };

  useEffect(() => {
    if (initialLicenseLoading) {
      fetchLicenseInfo();
      setInitialLicenseLoading(false);
    }
  }, [fetchLicenseInfo, initialLicenseLoading, setInitialLicenseLoading]);

  const formTitle = onlineActivation ? (
    <Box
      sx={{
        "& .title-text": {
          marginLeft: "27px",
          fontWeight: 600,
        },
      }}
    >
      <FormTitle
        icon={<OnlineRegistrationIcon />}
        title={`Register with MinIO Subscription Network`}
      />
    </Box>
  ) : (
    <Box
      sx={{
        "& .title-text": {
          marginLeft: "27px",
          fontWeight: 600,
        },
      }}
    >
      <FormTitle
        icon={<OfflineRegistrationIcon />}
        title={` Offline Activation of SUBNET License`}
      />
    </Box>
  );

  let clusterRegistrationForm: JSX.Element;

  if (onlineActivation) {
    if (subnetAccessToken && subnetOrganizations.length > 0) {
      clusterRegistrationForm = (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexFlow: "column",
              flex: "2",
            }}
          >
            <Box
              sx={{
                marginTop: "15px",
                marginBottom: "15px",
                "& .title-text": {
                  marginLeft: "0px",
                },
              }}
            >
              <FormTitle title={`Register MinIO cluster`} />
            </Box>
            <Box>
              <SelectWrapper
                id="subnet-organization"
                name="subnet-organization"
                onChange={(e) =>
                  setSelectedSubnetOrganization(e.target.value as string)
                }
                label="Select an organization"
                value={selectedSubnetOrganization}
                options={subnetOrganizations.map((organization) => ({
                  label: organization.company,
                  value: organization.accountId.toString(),
                }))}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginTop: "15px",
                }}
              >
                <Button
                  className={classes.button}
                  color="primary"
                  onClick={() => subnetRegister()}
                  disabled={loading || subnetAccessToken.trim().length === 0}
                  variant="contained"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
          <RegisterHelpBox />
        </Box>
      );
    } else if (subnetMFAToken) {
      clusterRegistrationForm = (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexFlow: "column",
              flex: "2",
            }}
          >
            <Box
              sx={{
                fontSize: "16px",
                display: "flex",
                flexFlow: "column",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Two-Factor Authentication
            </Box>

            <Box>
              Please enter the 6-digit verification code that was sent to your
              email address. This code will be valid for 5 minutes.
            </Box>

            <Box
              sx={{
                flex: "1",
                marginTop: "30px",
              }}
            >
              <InputBoxWrapper
                overlayIcon={<LockOutlinedIcon />}
                id="subnet-otp"
                name="subnet-otp"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSubnetOTP(event.target.value)
                }
                placeholder=""
                label=""
                value={subnetOTP}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                color="primary"
                onClick={() => subnetLoginWithMFA()}
                disabled={
                  loading ||
                  subnetOTP.trim().length === 0 ||
                  subnetMFAToken.trim().length === 0
                }
                variant="contained"
              >
                Verify
              </Button>
            </Box>
          </Box>

          <RegisterHelpBox />
        </Box>
      );
    } else {
      clusterRegistrationForm = (
        <Box
          sx={{
            display: "flex",
            flexFlow: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexFlow: "column",
              flex: "2",
            }}
          >
            <Box
              sx={{
                fontSize: "16px",
                display: "flex",
                flexFlow: "column",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Use your MinIO Subscription Network login credentials to register
              this cluster.
            </Box>
            <Box
              sx={{
                flex: "1",
              }}
            >
              <InputBoxWrapper
                className={classes.spacerBottom}
                classes={{
                  inputLabel: classes.sizedLabel,
                }}
                id="subnet-email"
                name="subnet-email"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSubnetEmail(event.target.value)
                }
                label="Email"
                value={subnetEmail}
                overlayIcon={<UsersIcon />}
              />
              <InputBoxWrapper
                className={classes.spacerBottom}
                classes={{
                  inputLabel: classes.sizedLabel,
                }}
                id="subnet-password"
                name="subnet-password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSubnetPassword(event.target.value)
                }
                label="Password"
                type={showPassword ? "text" : "password"}
                value={subnetPassword}
                overlayIcon={
                  showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />
                }
                overlayAction={() => setShowPassword(!showPassword)}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  type="submit"
                  className={classes.spacerRight}
                  variant="outlined"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `https://min.io/signup?ref=${
                        operatorMode ? "op" : "con"
                      }`,
                      "_blank"
                    );
                  }}
                >
                  Sign up
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={
                    loading ||
                    subnetEmail.trim().length === 0 ||
                    subnetPassword.trim().length === 0
                  }
                  onClick={() => subnetLogin()}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
          <RegisterHelpBox />
        </Box>
      );
    }
  } else {
    clusterRegistrationForm = (
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            flex: "2",
            marginTop: "15px",
            "& .step-number": {
              color: "#ffffff",
              height: "25px",
              width: "25px",
              background: "#081C42",
              marginRight: "10px",
              textAlign: "center",
              fontWeight: 600,
              borderRadius: "50%",
            },

            "& .step-row": {
              fontSize: "16px",
              display: "flex",
              marginTop: "15px",
              marginBottom: "15px",
            },
          }}
        >
          <Box>
            <Box className="step-row">
              <div className="step-number">1</div>{" "}
              <div className="step-text">
                Copy the following registration token
              </div>
            </Box>

            <Box
              sx={{
                flex: "1",
                marginTop: "15px",
                marginLeft: "35px",
                "& input": {
                  color: "#737373",
                },
              }}
            >
              <InputBoxWrapper
                id="registration-token"
                name="registration-token"
                placeholder=""
                label=""
                type="text"
                onChange={() => {}}
                value={subnetRegToken}
                overlayIcon={<CopyIcon />}
                extraInputProps={{
                  readOnly: true,
                }}
                overlayAction={() =>
                  navigator.clipboard.writeText(subnetRegToken)
                }
              />
            </Box>
          </Box>

          <Box>
            <Box className="step-row">
              <div className="step-number">2</div>
              <div className="step-text">
                Navigate to SUBNET and register your cluster
              </div>
            </Box>

            <Box
              sx={{
                flex: "1",
                marginLeft: "35px",
              }}
            >
              <Link
                className={classes.link}
                color="inherit"
                href="https://subnet.min.io/cluster/register"
                target="_blank"
              >
                https://subnet.min.io/cluster/register
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              fontSize: "16px",
              display: "flex",
              flexFlow: "column",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <Box className="step-row">
              <div className="step-number">3</div>{" "}
              <div className="step-text">
                Enter the API key generated by SUBNET
              </div>
            </Box>

            <Box
              sx={{
                flex: "1",
                marginTop: "15px",
                marginLeft: "35px",
              }}
            >
              <InputBoxWrapper
                value={license}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setLicense(event.target.value)
                }
                id="api-key"
                name="api-key"
                placeholder=""
                label=""
                type="text"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: "15px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => subnetLogin()}
              disabled={loading || license.trim().length === 0}
            >
              Register
            </Button>
          </Box>
        </Box>

        <RegisterHelpBox />
      </Box>
    );
  }

  const proxyConfigurationCommand =
    "mc admin config set {alias} subnet proxy={proxy}";

  return (
    <Fragment>
      <PageHeader label="Register" />
      <PageLayout>
        <Box
          sx={{
            border: "1px solid #eaeaea",
            borderRadius: "2px",
            display: "flex",
            flexFlow: "column",
            padding: "43px",
          }}
        >
          {clusterRegistered && <RegisterStatus />}

          {!onlineActivation ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: "30px",
                "& .min-icon": {
                  height: "25px",
                  width: "25px",
                  marginRight: "15px",
                },
              }}
            >
              <OnlineRegistrationBackIcon />
              <Link
                className={classes.link}
                onClick={() => setOnlineActivation(!onlineActivation)}
              >
                Back to Online Activation
              </Link>
            </Box>
          ) : null}

          {formTitle}

          {clusterRegistrationForm}
        </Box>

        {onlineActivation && (
          <React.Fragment>
            <Box
              sx={{
                border: "1px solid #eaeaea",
                borderRadius: "2px",
                display: "flex",
                padding: "23px",
                marginTop: "40px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    "& .min-icon": {
                      height: "22px",
                      width: "22px",
                    },
                  }}
                >
                  <SettingsIcon />
                  <div style={{ marginLeft: "10px", fontWeight: 600 }}>
                    Proxy Configuration
                  </div>
                </Box>
                <Box
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                >
                  For airgap/firewalled environments it is possible to{" "}
                  <Link
                    className={classes.link}
                    href="https://docs.min.io/docs/minio-server-configuration-guide.html?ref=con"
                    target="_blank"
                  >
                    configure a proxy
                  </Link>{" "}
                  to connect to SUBNET .
                </Box>
                <Box>
                  {displaySubnetProxy && (
                    <InputBoxWrapper
                      disabled
                      id="subnetProxy"
                      name="subnetProxy"
                      placeholder=""
                      onChange={() => {}}
                      label=""
                      value={proxyConfigurationCommand}
                      overlayIcon={<CopyIcon />}
                      extraInputProps={{
                        readOnly: true,
                      }}
                      overlayAction={() =>
                        navigator.clipboard.writeText(proxyConfigurationCommand)
                      }
                    />
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <FormSwitchWrapper
                  value="enableProxy"
                  id="enableProxy"
                  name="enableProxy"
                  checked={displaySubnetProxy}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDisplaySubnetProxy(event.target.checked);
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid #eaeaea",
                borderRadius: "2px",
                display: "flex",
                padding: "23px",
                marginTop: "40px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <OfflineRegistrationBackIcon /> Cluster does not have internet
                access? Use{" "}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "8px",
                }}
              >
                <Link
                  className={classes.link}
                  onClick={() => {
                    fetchSubnetRegToken();
                    setOnlineActivation(!onlineActivation);
                  }}
                >
                  Offline Activation.
                </Link>
              </Box>
            </Box>
          </React.Fragment>
        )}
      </PageLayout>
    </Fragment>
  );
};

const mapState = (state: AppState) => ({
  operatorMode: state.system.operatorMode,
});

const connector = connect(mapState, {
  displayErrorMessage: setErrorSnackMessage,
});

export default withStyles(styles)(connector(Register));