import React from "react"
import { menu } from "../utils/meta.data"
import {
  FaHome,
  FaHubspot,
  FaPills,
  FaCut,
  FaFemale,
  FaBaby,
  FaXRay,
  FaTooth,
  FaAtom,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaGraduationCap,
} from "react-icons/fa"
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar"

import { useIntl, Link } from "gatsby-plugin-intl"

const menuKeys = Object.keys(menu)
const Sidebar = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  return (
    <ProSidebar
      breakPoint="md"
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Raj-Doctors
        </div>
      </SidebarHeader>
      {/* <Scrollbars
        // renderThumbVertical={renderView}
        style={{ width: "100%", height: "100%" }}
      > */}
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />}>
            {intl.formatMessage({ id: "home" })}
            <Link to={`/`}></Link>
          </MenuItem>
          <MenuItem icon={<FaHubspot />}>
            {intl.formatMessage({ id: "Doctors" })}
            <Link to={`/doctors/`}></Link>
          </MenuItem>
          <MenuItem icon={<FaGraduationCap />}>
            {intl.formatMessage({ id: "Speciality" })}
            <Link to={`/speciality/`}></Link>
          </MenuItem>

          {menuKeys.map((key, ind) =>
            typeof menu[key] !== "string" ? (
              <SubMenu
                key={key + ind}
                title={intl.formatMessage({ id: `${key}` })}
                icon={
                  key === "Medicine" ? (
                    <FaPills />
                  ) : key === "Surgery" ? (
                    <FaCut />
                  ) : key === "Radiology" ? (
                    <FaXRay />
                  ) : (
                    <FaAtom />
                  )
                }
              >
                {menu[key].map((item, index) => (
                  <MenuItem key={index}>
                    {intl.formatMessage({ id: `${item}` })}
                    <Link to={`/speciality/${item.toLowerCase()}/`}></Link>
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={ind}
                icon={
                  key === "Gynaecology" ? (
                    <FaFemale />
                  ) : key === "Dental Surgery" ? (
                    <FaTooth />
                  ) : key === "Paediatrics" ? (
                    <FaBaby />
                  ) : (
                    <FaAtom />
                  )
                }
              >
                {intl.formatMessage({ id: `${key}` })}
                <Link to={`/speciality/${menu[key].toLowerCase()}/`}></Link>
              </MenuItem>
            )
          )}
        </Menu>
      </SidebarContent>
      {/* </Scrollbars> */}
      <SidebarFooter>
        <div
          style={{
            width: "55px",
            height: "55px",
            background: "#2B2B2B",
            margin: "10px 10px",
          }}
          className="d-flex justify-content-center align-items-center rounded-circle"
          onClick={() => handleCollapsedChange(!collapsed)}
          onKeyUp={() => handleCollapsedChange(!collapsed)}
          role="button"
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default Sidebar
