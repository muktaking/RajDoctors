import React from "react"
import { Link } from "gatsby"
import { menu } from "../../meta.data"
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

const menuKeys = Object.keys(menu)
const Sidebar = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
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
            Home
            <Link to="/"></Link>
          </MenuItem>
          <MenuItem icon={<FaHubspot />}>
            Doctors
            <Link to="/doctors"></Link>
          </MenuItem>
          <MenuItem icon={<FaGraduationCap />}>
            Speciality
            <Link to="/speciality"></Link>
          </MenuItem>

          {menuKeys.map((key, ind) =>
            typeof menu[key] !== "string" ? (
              <SubMenu
                key={key + ind}
                title={key}
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
                    {item}
                    <Link to={"/speciality/" + item.toLowerCase()}></Link>
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={ind}
                icon={
                  key === "Gynaecology" ? (
                    <FaFemale />
                  ) : key === "DentalSurgery" ? (
                    <FaTooth />
                  ) : key === "Paediatrics" ? (
                    <FaBaby />
                  ) : (
                    <FaAtom />
                  )
                }
              >
                {menu[key]}
                <Link to={"/speciality/" + menu[key].toLowerCase()}></Link>
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
