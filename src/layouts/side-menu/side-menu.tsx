import {
  Box,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../constants/routes";

const drawerWidth = 240;

export const SideMenu = forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, ...props }, ref) => {
    const { pathname } = useLocation();

    return (
      <>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          ref={ref}
          {...props}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {Object.values(routes)
                .filter(({ name }) => !!name)
                .map(({ name, icon, path }) => (
                  <Link to={path} key={name}>
                    <ListItem
                      disablePadding
                      sx={{
                        color: "MenuText",
                      }}
                    >
                      <ListItemButton selected={path === pathname}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={name} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </>
    );
  }
);
