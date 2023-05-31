/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectRoutes = ({ route, children }) => {
    const { role, userInfo } = useSelector((state) => state.auth);

    if (role) {
        if (userInfo) {
            if (route.role) {
                if (userInfo.role === route.role) {
                    if (route.status) {
                        if (userInfo.status === route.status) {
                            return (
                                <Suspense fallback={null}>{children}</Suspense>
                            );
                        } else {
                            if (userInfo.status === "pending") {
                                return <Navigate to="/users/account-pending" />;
                            } else {
                                return <Navigate to="/users/deactivate" />;
                            }
                        }
                    } else {
                        if (route.visibility) {
                            if (
                                route.visibility.some(
                                    (r) => r === userInfo.status
                                )
                            ) {
                                return (
                                    <Suspense fallback={null}>
                                        {children}
                                    </Suspense>
                                );
                            } else {
                                return <Navigate to="/users/account-pending" />;
                            }
                        } else {
                            return (
                                <Suspense fallback={null}>{children}</Suspense>
                            );
                        }
                    }
                } else {
                    return <Navigate to="/unauthorized" replace />;
                }
            } else {
                if (route.ability === "user") {
                    return <Suspense fallback={null}>{children}</Suspense>;
                }
            }
        }
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default ProtectRoutes;
