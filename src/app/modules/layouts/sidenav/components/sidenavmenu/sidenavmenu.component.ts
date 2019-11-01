import { Component, OnInit } from '@angular/core';

import { Menuitem } from './../../../../../models/layouts/menuitem.interface';

@Component({
  selector: 'mdc-sidenavmenu',
  templateUrl: './sidenavmenu.component.html',
  styleUrls: ['./sidenavmenu.component.css']
})
export class SidenavmenuComponent implements OnInit {

  siteMenu: Menuitem[] = [
    {
      name: 'General',
      class: '',
      href: '',
      icon: '',
      isCategory: true,
      isHidden: false,
      items: [
        {
          name: 'Dashboard',
          class: '',
          href: 'index.html',
          icon: 'dashboard',
          isCategory: false,
          isHidden: false,
          items: []
        }
      ]
    }
  ];

  menuStructure = [
    {
      "category": {
        "name": "General",
        "items": [
          {
            "name": "Dashboard",
            "icon": "dashboard",
            "href": "index.html",
            "items": []
          },
          {
            "name": "Layouts",
            "icon": "view_quilt",
            "items": [
              {
                "name": "Menu Collapsed",
                "icon": null,
                "href": "layouts/menu-collapsed.html",
                "items": []
              },
              {
                "name": "Menu Expanded",
                "icon": null,
                "href": "layouts/menu-expanded.html",
                "items": []
              },
              {
                "name": "Grid Scaffolding",
                "icon": null,
                "href": "layouts/grids.html",
                "items": []
              },
              {
                "name": "Layout Grid",
                "icon": null,
                "href": "layouts/layout-grid.html",
                "items": []
              },
              {
                "name": "Different Headers",
                "icon": null,
                "href": "layouts/headers.html",
                "items": []
              },
              {
                "name": "Panel Transition",
                "icon": null,
                "href": "layouts/panel-transition.html",
                "items": []
              },
              {
                "name": "Boxed Layout",
                "icon": null,
                "href": "layouts/boxed.html",
                "items": []
              },
              {
                "name": "Two Columns",
                "icon": null,
                "href": "layouts/two-columns.html",
                "items": []
              },
              {
                "name": "Bordered Header",
                "icon": null,
                "href": "layouts/bordered-header.html",
                "items": []
              },
              {
                "name": "Menubar Flipped",
                "icon": null,
                "href": "layouts/menubar-flipped.html",
                "items": []
              },
              {
                "name": "Menubar Native Scrolling",
                "icon": null,
                "href": "layouts/menubar-native-scrolling.html",
                "items": []
              },
              {
                "name": "Page Aside",
                "icon": null,
                "items": [
                  {
                    "name": "Left Static",
                    "icon": null,
                    "href": "layouts/aside-left-static.html",
                    "items": []
                  },
                  {
                    "name": "Right Static",
                    "icon": null,
                    "href": "layouts/aside-right-static.html",
                    "items": []
                  },
                  {
                    "name": "Left Fixed",
                    "icon": null,
                    "href": "layouts/aside-left-fixed.html",
                    "items": []
                  },
                  {
                    "name": "Right Fixed",
                    "icon": null,
                    "href": "layouts/aside-right-fixed.html",
                    "items": []
                  },
                ]
              },
            ]
          },
          {
            "name": "Pages",
            "icon": "pages",
            "items": [
              {
                "name": "Errors",
                "icon": null,
                "items": [
                  {
                    "name": "400",
                    "icon": null,
                    "href": "pages/error-400.html",
                    "items": []
                  },
                  {
                    "name": "403",
                    "icon": null,
                    "href": "pages/error-403.html",
                    "items": []
                  },
                  {
                    "name": "404",
                    "icon": null,
                    "href": "pages/error-404.html",
                    "items": []
                  },
                  {
                    "name": "500",
                    "icon": null,
                    "href": "pages/error-500.html",
                    "items": []
                  },
                  {
                    "name": "503",
                    "icon": null,
                    "href": "pages/error-503.html",
                    "items": []
                  },
                ]
              },
              {
                "name": "FAQ",
                "icon": null,
                "href": "pages/faq.html",
                "items": []
              },
              {
                "name": "Gallery",
                "icon": null,
                "href": "pages/gallery.html",
                "items": []
              },
              {
                "name": "Gallery Grid",
                "icon": null,
                "href": "pages/gallery-grid.html",
                "items": []
              },
              {
                "name": "Search Result",
                "icon": null,
                "href": "pages/search-result.html",
                "items": []
              },
              {
                "name": "Maps",
                "icon": null,
                "items": [
                  {
                    "name": "Google Maps",
                    "icon": null,
                    "href": "pages/map-google.html",
                    "items": []
                  },
                  {
                    "name": "Vector Maps",
                    "icon": null,
                    "href": "pages/map-vector.html",
                    "items": []
                  },
                ]
              },
              {
                "name": "Maintenance",
                "icon": null,
                "href": "pages/maintenance.html",
                "items": []
              },
              {
                "name": "Forgot Password",
                "icon": null,
                "href": "pages/forgot-password.html",
                "items": []
              },
              {
                "name": "Lockscreen",
                "icon": null,
                "href": "pages/lockscreen.html",
                "items": []
              },
              {
                "name": "Login",
                "icon": null,
                "href": "pages/login.html",
                "items": []
              },
              {
                "name": "Register",
                "icon": null,
                "href": "pages/register.html",
                "items": []
              },
              {
                "name": "Login V2",
                "icon": null,
                "href": "pages/login-v2.html",
                "items": []
              },
              {
                "name": "Register V2",
                "icon": null,
                "href": "pages/register-v2.html",
                "items": []
              },
              {
                "name": "Login V3",
                "icon": null,
                "href": "pages/login-v3.html",
                "items": []
              },
              {
                "name": "Register V3",
                "icon": null,
                "href": "pages/register-v3.html",
                "items": []
              },
              {
                "name": "User List",
                "icon": null,
                "href": "pages/user.html",
                "items": []
              },
              {
                "name": "Invoice",
                "icon": null,
                "href": "pages/invoice.html",
                "items": []
              },
              {
                "name": "Blank Page",
                "icon": null,
                "href": "pages/blank.html",
                "items": []
              },
              {
                "name": "Email",
                "icon": null,
                "items": [
                  {
                    "name": "Articles",
                    "icon": null,
                    "href": "pages/email-articles.html",
                    "items": []
                  },
                  {
                    "name": "Welcome",
                    "icon": null,
                    "href": "pages/email-welcome.html",
                    "items": []
                  },
                  {
                    "name": "Post",
                    "icon": null,
                    "href": "pages/email-post.html",
                    "items": []
                  },
                  {
                    "name": "Thumbnail",
                    "icon": null,
                    "href": "pages/email-thumbnail.html",
                    "items": []
                  },
                  {
                    "name": "News",
                    "icon": null,
                    "href": "pages/email-news.html",
                    "items": []
                  },
                ]
              },
              {
                "name": "Code Editor",
                "icon": null,
                "href": "pages/code-editor.html",
                "items": []
              },
              {
                "name": "Profile",
                "icon": null,
                "href": "pages/profile.html",
                "items": []
              },
              {
                "name": "Profile V2",
                "icon": null,
                "href": "pages/profile-v2.html",
                "items": []
              },
              {
                "name": "Profile V3",
                "icon": null,
                "href": "pages/profile-v3.html",
                "items": []
              },
              {
                "name": "Sitemap",
                "icon": null,
                "href": "pages/site-map.html",
                "items": []
              },
              {
                "name": "Project",
                "icon": null,
                "href": "pages/project.html",
                "items": []
              },
            ]
          },
        ]
      }
    },
    {
      "category": {
        "name": "Elements",
        "items": [
          {
            "name": "Basic UI",
            "icon": "md-palette",
            "items": [
              {
                "name": "Panel",
                "icon": null,
                "items": [
                  {
                    "name": "Panel Structure",
                    "icon": null,
                    "href": "uikit/panel-structure.html",
                    "items": []
                  },
                  {
                    "name": "Panel Actions",
                    "icon": null,
                    "href": "uikit/panel-actions.html",
                    "items": []
                  },
                  {
                    "name": "Panel Portlets",
                    "icon": null,
                    "href": "uikit/panel-portlets.html",
                    "items": []
                  },
                ]
              },
              {
                "name": "Buttons",
                "icon": null,
                "href": "uikit/buttons.html",
                "items": []
              },
              {
                "name": "Cards",
                "icon": null,
                "href": "uikit/cards.html",
                "items": []
              },
              {
                "name": "Dropdowns",
                "icon": null,
                "href": "uikit/dropdowns.html",
                "items": []
              },
              {
                "name": "Icons",
                "icon": null,
                "href": "uikit/icons.html",
                "items": []
              },
              {
                "name": "List",
                "icon": null,
                "href": "uikit/list.html",
                "items": []
              },
              {
                "name": "Tooltip & Popover",
                "icon": null,
                "href": "uikit/tooltip-popover.html",
                "items": []
              },
              {
                "name": "Modals",
                "icon": null,
                "href": "uikit/modals.html",
                "items": []
              },
              {
                "name": "Tabs & Accordions",
                "icon": null,
                "href": "uikit/tabs-accordions.html",
                "items": []
              },
              {
                "name": "Images",
                "icon": null,
                "href": "uikit/images.html",
                "items": []
              },
              {
                "name": "Badges",
                "icon": null,
                "href": "uikit/badges.html",
                "items": []
              },
              {
                "name": "Progress Bars",
                "icon": null,
                "href": "uikit/progress-bars.html",
                "items": []
              },
              {
                "name": "Carousel",
                "icon": null,
                "href": "uikit/carousel.html",
                "items": []
              },
              {
                "name": "Typography",
                "icon": null,
                "href": "uikit/typography.html",
                "items": []
              },
              {
                "name": "Colors",
                "icon": null,
                "href": "uikit/colors.html",
                "items": []
              },
              {
                "name": "Utilties",
                "icon": null,
                "href": "uikit/utilities.html",
                "items": []
              },
            ]
          },
          {
            "name": "Advanced UI",
            "icon": "md-format-color-fill",
            "items": [
              {
                "name": "Tour",
                "icon": null,
                "class": "class=site-tour-trigger",
                "items": []
              },
              {
                "name": "Animation",
                "icon": null,
                "href": "advanced/animation.html",
                "items": []
              },
              {
                "name": "Highlight",
                "icon": null,
                "href": "advanced/highlight.html",
                "items": []
              },
              {
                "name": "Lightbox",
                "icon": null,
                "href": "advanced/lightbox.html",
                "items": []
              },
              {
                "name": "Scrollable",
                "icon": null,
                "href": "advanced/scrollable.html",
                "items": []
              },
              {
                "name": "Rating",
                "icon": null,
                "href": "advanced/rating.html",
                "items": []
              },
              {
                "name": "Context Menu",
                "icon": null,
                "href": "advanced/context-menu.html",
                "items": []
              },
              {
                "name": "Alertify",
                "icon": null,
                "href": "advanced/alertify.html",
                "items": []
              },
              {
                "name": "Masonry",
                "icon": null,
                "href": "advanced/masonry.html",
                "items": []
              },
              {
                "name": "Treeview",
                "icon": null,
                "href": "advanced/treeview.html",
                "items": []
              },
              {
                "name": "Toastr",
                "icon": null,
                "href": "advanced/toastr.html",
                "items": []
              },
              {
                "name": "Vector Maps",
                "icon": null,
                "href": "advanced/maps-vector.html",
                "items": []
              },
              {
                "name": "Google Maps",
                "icon": null,
                "href": "advanced/maps-google.html",
                "items": []
              },
              {
                "name": "Sortable & Nestable",
                "icon": null,
                "href": "advanced/sortable-nestable.html",
                "items": []
              },
              {
                "name": "Bootbox & Sweetalert",
                "icon": null,
                "href": "advanced/bootbox-sweetalert.html",
                "items": []
              },
            ]
          },
          {
            "name": "Structure",
            "icon": "md-puzzle-piece",
            "items": [
              {
                "name": "Alerts",
                "icon": null,
                "href": "structure/alerts.html",
                "items": []
              },
              {
                "name": "Ribbon",
                "icon": null,
                "href": "structure/ribbon.html",
                "items": []
              },
              {
                "name": "Pricing Tables",
                "icon": null,
                "href": "structure/pricing-tables.html",
                "items": []
              },
              {
                "name": "Overlay",
                "icon": null,
                "href": "structure/overlay.html",
                "items": []
              },
              {
                "name": "Cover",
                "icon": null,
                "href": "structure/cover.html",
                "items": []
              },
              {
                "name": "Simple Timeline",
                "icon": null,
                "href": "structure/timeline-simple.html",
                "items": []
              },
              {
                "name": "Timeline",
                "icon": null,
                "href": "structure/timeline.html",
                "items": []
              },
              {
                "name": "Step",
                "icon": null,
                "href": "structure/step.html",
                "items": []
              },
              {
                "name": "Comments",
                "icon": null,
                "href": "structure/comments.html",
                "items": []
              },
              {
                "name": "Media",
                "icon": null,
                "href": "structure/media.html",
                "items": []
              },
              {
                "name": "Chat",
                "icon": null,
                "href": "structure/chat.html",
                "items": []
              },
              {
                "name": "Testimonials",
                "icon": null,
                "href": "structure/testimonials.html",
                "items": []
              },
              {
                "name": "Nav",
                "icon": null,
                "href": "structure/nav.html",
                "items": []
              },
              {
                "name": "Navbars",
                "icon": null,
                "href": "structure/navbars.html",
                "items": []
              },
              {
                "name": "Blockquotes",
                "icon": null,
                "href": "structure/blockquotes.html",
                "items": []
              },
              {
                "name": "Pagination",
                "icon": null,
                "href": "structure/pagination.html",
                "items": []
              },
              {
                "name": "Breadcrumbs",
                "icon": null,
                "href": "structure/paginabreadcrumbstion.html",
                "items": []
              },
            ]
          },
          {
            "name": "Widgets",
            "icon": "md-widgets",
            "items": [
              {
                "name": "Statistics Widgets",
                "icon": null,
                "href": "widgets/statistics.html",
                "items": []
              },
              {
                "name": "Data Widgets",
                "icon": null,
                "href": "widgets/data.html",
                "items": []
              },
              {
                "name": "Blog Widgets",
                "icon": null,
                "href": "widgets/blog.html",
                "items": []
              },
              {
                "name": "Chart Widgets",
                "icon": null,
                "href": "widgets/chart.html",
                "items": []
              },
              {
                "name": "Social Widgets",
                "icon": null,
                "href": "widgets/social.html",
                "items": []
              },
              {
                "name": "Weather Widgets",
                "icon": null,
                "href": "widgets/weather.html",
                "items": []
              },
            ]
          },
          {
            "name": "Forms",
            "icon": "md-comment-alt-text",
            "items": [
              {
                "name": "General Elements",
                "icon": null,
                "href": "forms/general.html",
                "items": []
              },
              {
                "name": "Material Elements",
                "icon": null,
                "href": "forms/material.html",
                "items": []
              },
              {
                "name": "Advanced Elements",
                "icon": null,
                "href": "forms/advanced.html",
                "items": []
              },
              {
                "name": "Form Layouts",
                "icon": null,
                "href": "forms/layouts.html",
                "items": []
              },
              {
                "name": "Form Wizard",
                "icon": null,
                "href": "forms/wizard.html",
                "items": []
              },
              {
                "name": "Form Validation",
                "icon": null,
                "href": "forms/validation.html",
                "items": []
              },
              {
                "name": "Form Masks",
                "icon": null,
                "href": "forms/masks.html",
                "items": []
              },
              {
                "name": "Editors",
                "icon": null,
                "items": [
                  {
                    "name": "Summernote",
                    "icon": null,
                    "href": "forms/editor-summernote.html",
                    "items": []
                  },
                  {
                    "name": "Markdown",
                    "icon": null,
                    "href": "forms/editor-markdown.html",
                    "items": []
                  },
                  {
                    "name": "Ace Editor",
                    "icon": null,
                    "href": "forms/editor-ace.html",
                    "items": []
                  },
                ]
              },
              {
                "name": "Image Cropping",
                "icon": null,
                "href": "forms/image-cropping.html",
                "items": []
              },
              {
                "name": "File Uploads",
                "icon": null,
                "href": "forms/file-uploads.html",
                "items": []
              },
            ]
          },
          {
            "name": "Tables",
            "icon": "md-border-all",
            "items": [
              {
                "name": "Basic Tables",
                "icon": null,
                "href": "tables/basic.html",
                "items": []
              },
              {
                "name": "Bootstrap Tables",
                "icon": null,
                "href": "tables/bootstrap.html",
                "items": []
              },
              {
                "name": "floatThead",
                "icon": null,
                "href": "tables/floatthead.html",
                "items": []
              },
              {
                "name": "Responsive Tables",
                "icon": null,
                "href": "tables/responsive.html",
                "items": []
              },
              {
                "name": "Editable Tables",
                "icon": null,
                "href": "tables/editable.html",
                "items": []
              },
              {
                "name": "jsGrid",
                "icon": null,
                "href": "tables/jsgrid.html",
                "items": []
              },
              {
                "name": "FooTable",
                "icon": null,
                "href": "tables/footable.html",
                "items": []
              },
              {
                "name": "DataTables",
                "icon": null,
                "href": "tables/datatable.html",
                "items": []
              },
              {
                "name": "Jquery Tabledit",
                "icon": null,
                "href": "tables/jqtabledit.html",
                "items": []
              },
              {
                "name": "Table Dragger",
                "icon": null,
                "href": "tables/table-dragger.html",
                "items": []
              },
            ]
          },
          {
            "name": "Chart",
            "icon": "md-chart",
            "items": [
              {
                "name": "Chart.js",
                "icon": null,
                "href": "charts/chartjs.html",
                "items": []
              },
              {
                "name": "Gauges",
                "icon": null,
                "href": "charts/gauges.html",
                "items": []
              },
              {
                "name": "Flot",
                "icon": null,
                "href": "charts/flot.html",
                "items": []
              },
              {
                "name": "Peity",
                "icon": null,
                "href": "charts/peity.html",
                "items": []
              },
              {
                "name": "Sparkline",
                "icon": null,
                "href": "charts/sparkline.html",
                "items": []
              },
              {
                "name": "Morris",
                "icon": null,
                "href": "charts/morris.html",
                "items": []
              },
              {
                "name": "Chartist.js",
                "icon": null,
                "href": "charts/chartist.html",
                "items": []
              },
              {
                "name": "Rickshaw",
                "icon": null,
                "href": "charts/rickshaw.html",
                "items": []
              },
              {
                "name": "Pie Progress",
                "icon": null,
                "href": "charts/pie-progress.html",
                "items": []
              },
              {
                "name": "C3",
                "icon": null,
                "href": "charts/c3.html",
                "items": []
              },
            ]
          }
        ]
      }
    },
    {
      "category": {
        "name": "Apps",
        "items": [
          {
            "name": "Apps",
            "icon": "md-apps",
            "items": [
              {
                "name": "Contacts",
                "icon": null,
                "href": "apps/contacts/contacts.html",
                "items": []
              },
              {
                "name": "Calendar",
                "icon": null,
                "href": "apps/calendar/calendar.html",
                "items": []
              },
              {
                "name": "Notebook",
                "icon": null,
                "href": "apps/notebook/notebook.html",
                "items": []
              },
              {
                "name": "Taskboard",
                "icon": null,
                "href": "apps/taskboard/taskboard.html",
                "items": []
              },
              {
                "name": "Documents",
                "icon": null,
                "items": [
                  {
                    "name": "Articles",
                    "icon": null,
                    "href": "apps/documents/articles.html",
                    "items": []
                  },
                  {
                    "name": "Categories",
                    "icon": null,
                    "href": "apps/documents/categories.html",
                    "items": []
                  },
                  {
                    "name": "Article",
                    "icon": null,
                    "href": "apps/documents/article.html",
                    "items": []
                  },
                ]
              },
              {
                "name": "Forum",
                "icon": null,
                "href": "apps/forum/forum.html",
                "items": []
              },
              {
                "name": "Message",
                "icon": null,
                "href": "apps/message/message.html",
                "items": []
              },
              {
                "name": "Projects",
                "icon": null,
                "href": "apps/projects/projects.html",
                "items": []
              },
              {
                "name": "Mailbox",
                "icon": null,
                "href": "apps/mailbox/mailbox.html",
                "items": []
              },
              {
                "name": "Media",
                "icon": null,
                "href": "apps/media/overview.html",
                "items": []
              },
              {
                "name": "Work",
                "icon": null,
                "href": "apps/work/work.html",
                "items": []
              },
              {
                "name": "Location",
                "icon": null,
                "href": "apps/location/location.html",
                "items": []
              },
              {
                "name": "Travel",
                "icon": null,
                "href": "apps/travel/travel.html",
                "items": []
              },
            ]
          },
        ]
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
