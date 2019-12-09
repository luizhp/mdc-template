import { Injectable, OnInit } from '@angular/core';
import { Menuitem } from 'src/app/models/layouts/menuitem.interface';
import { Subject } from 'rxjs';

@Injectable(
  //{  providedIn: 'root'}
)
export class MenuService {

  private menuStructure: Menuitem[] = [
    {
      name: 'General',
      isFold: false,
      isCategory: true,
      items: [
        {
          name: 'Dashboard',
          href: '/',
          icon: 'dashboard',
          items: []
        },
        {
          name: 'Layouts',
          icon: 'view_quilt',
          isFold: true,
          items: [
            {
              name: 'Menu Collapsed',
              href: 'layouts/menu-collapsed.html',
              items: []
            },
            {
              name: 'Menu Expanded',
              href: 'layouts/menu-expanded.html',
              items: []
            },
            {
              name: 'Grid Scaffolding',
              href: 'layouts/grids.html',
              items: []
            },
            {
              name: 'Layout Grid',
              href: 'layouts/layout-grid.html',
              items: []
            },
            {
              name: 'Different Headers',
              href: 'layouts/headers.html',
              items: []
            },
            {
              name: 'Panel Transition',
              href: 'layouts/panel-transition.html',
              items: []
            },
            {
              name: 'Boxed Layout',
              href: 'layouts/boxed.html',
              items: []
            },
            {
              name: 'Two Columns',
              href: 'layouts/two-columns.html',
              items: []
            },
            {
              name: 'Bordered Header',
              href: 'layouts/bordered-header.html',
              items: []
            },
            {
              name: 'Menubar Flipped',
              href: 'layouts/menubar-flipped.html',
              items: []
            },
            {
              name: 'Menubar Native Scrolling',
              href: 'layouts/menubar-native-scrolling.html',
              items: []
            },
            {
              name: 'Page Aside',
              isFold: true,
              items: [
                {
                  name: 'Left Static',
                  href: 'layouts/aside-left-static.html',
                  items: []
                },
                {
                  name: 'Right Static',
                  href: 'layouts/aside-right-static.html',
                  items: []
                },
                {
                  name: 'Left Fixed',
                  href: 'layouts/aside-left-fixed.html',
                  items: []
                },
                {
                  name: 'Right Fixed',
                  href: 'layouts/aside-right-fixed.html',
                  items: []
                },
              ]
            },
          ]
        },
        {
          name: 'Pages',
          icon: 'pages',
          isFold: true,
          items: [
            {
              name: 'Errors',
              isFold: true,
              items: [
                {
                  name: '400',
                  href: 'pages/error-400.html',
                  items: []
                },
                {
                  name: '403',
                  href: 'pages/error-403.html',
                  items: []
                },
                {
                  name: '404',
                  href: 'pages/error-404.html',
                  items: []
                },
                {
                  name: '500',
                  href: 'pages/error-500.html',
                  items: []
                },
                {
                  name: '503',
                  href: 'pages/error-503.html',
                  items: []
                },
              ]
            },
            {
              name: 'FAQ',
              href: 'pages/faq.html',
              items: []
            },
            {
              name: 'Gallery',
              href: 'pages/gallery.html',
              items: []
            },
            {
              name: 'Gallery Grid',
              href: 'pages/gallery-grid.html',
              items: []
            },
            {
              name: 'Search Result',
              href: 'pages/search-result.html',
              items: []
            },
            {
              name: 'Maps',
              isFold: true,
              items: [
                {
                  name: 'Google Maps',
                  href: 'pages/map-google.html',
                  items: []
                },
                {
                  name: 'Vector Maps',
                  href: 'pages/map-vector.html',
                  items: []
                },
              ]
            },
            {
              name: 'Maintenance',
              href: 'pages/maintenance.html',
              items: []
            },
            {
              name: 'Forgot Password',
              href: 'pages/forgot-password.html',
              items: []
            },
            {
              name: 'Lockscreen',
              href: 'pages/lockscreen.html',
              items: []
            },
            {
              name: 'Login',
              href: 'pages/login.html',
              items: []
            },
            {
              name: 'Register',
              href: 'pages/register.html',
              items: []
            },
            {
              name: 'Login V2',
              href: 'pages/login-v2.html',
              items: []
            },
            {
              name: 'Register V2',
              href: 'pages/register-v2.html',
              items: []
            },
            {
              name: 'Login V3',
              href: 'pages/login-v3.html',
              items: []
            },
            {
              name: 'Register V3',
              href: 'pages/register-v3.html',
              items: []
            },
            {
              name: 'User List',
              href: 'pages/user.html',
              items: []
            },
            {
              name: 'Invoice',
              href: 'pages/invoice.html',
              items: []
            },
            {
              name: 'Blank Page',
              href: 'pages/blank.html',
              items: []
            },
            {
              name: 'Email',
              isFold: true,
              items: [
                {
                  name: 'Articles',
                  href: 'pages/email-articles.html',
                  items: []
                },
                {
                  name: 'Welcome',
                  href: 'pages/email-welcome.html',
                  items: []
                },
                {
                  name: 'Post',
                  href: 'pages/email-post.html',
                  items: []
                },
                {
                  name: 'Thumbnail',
                  href: 'pages/email-thumbnail.html',
                  items: []
                },
                {
                  name: 'News',
                  href: 'pages/email-news.html',
                  items: []
                },
              ]
            },
            {
              name: 'Code Editor',
              href: 'pages/code-editor.html',
              items: []
            },
            {
              name: 'Profile',
              href: 'pages/profile.html',
              items: []
            },
            {
              name: 'Profile V2',
              href: 'pages/profile-v2.html',
              items: []
            },
            {
              name: 'Profile V3',
              href: 'pages/profile-v3.html',
              items: []
            },
            {
              name: 'Sitemap',
              href: 'pages/site-map.html',
              items: []
            },
            {
              name: 'Project',
              href: 'pages/project.html',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Elements',
      isFold: true,
      isCategory: true,
      items: [
        {
          name: 'Basic UI',
          icon: 'palette',
          isFold: true,
          items: [
            {
              name: 'Panel',
              isFold: true,
              items: [
                {
                  name: 'Panel Structure',
                  href: 'uikit/panel-structure.html',
                  items: []
                },
                {
                  name: 'Panel Actions',
                  href: 'uikit/panel-actions.html',
                  items: []
                },
                {
                  name: 'Panel Portlets',
                  href: 'uikit/panel-portlets.html',
                  items: []
                },
              ]
            },
            {
              name: 'Buttons',
              href: 'uikit/buttons.html',
              items: []
            },
            {
              name: 'Cards',
              href: 'uikit/cards.html',
              items: []
            },
            {
              name: 'Dropdowns',
              href: 'uikit/dropdowns.html',
              items: []
            },
            {
              name: 'Icons',
              href: 'uikit/icons.html',
              items: []
            },
            {
              name: 'List',
              href: 'uikit/list.html',
              items: []
            },
            {
              name: 'Tooltip & Popover',
              href: 'uikit/tooltip-popover.html',
              items: []
            },
            {
              name: 'Modals',
              href: 'uikit/modals.html',
              items: []
            },
            {
              name: 'Tabs & Accordions',
              href: 'uikit/tabs-accordions.html',
              items: []
            },
            {
              name: 'Images',
              href: 'uikit/images.html',
              items: []
            },
            {
              name: 'Badges',
              href: 'uikit/badges.html',
              items: []
            },
            {
              name: 'Progress Bars',
              href: 'uikit/progress-bars.html',
              items: []
            },
            {
              name: 'Carousel',
              href: 'uikit/carousel.html',
              items: []
            },
            {
              name: 'Typography',
              href: 'uikit/typography.html',
              items: []
            },
            {
              name: 'Colors',
              href: 'uikit/colors.html',
              items: []
            },
            {
              name: 'Utilties',
              href: 'uikit/utilities.html',
              items: []
            },
          ]
        },
        {
          name: 'Advanced UI',
          icon: 'format_paint',
          isFold: true,
          items: [
            {
              name: 'Tour',
              class: 'class=site-tour-trigger',
              items: []
            },
            {
              name: 'Animation',
              href: 'advanced/animation.html',
              items: []
            },
            {
              name: 'Highlight',
              href: 'advanced/highlight.html',
              items: []
            },
            {
              name: 'Lightbox',
              href: 'advanced/lightbox.html',
              items: []
            },
            {
              name: 'Scrollable',
              href: 'advanced/scrollable.html',
              items: []
            },
            {
              name: 'Rating',
              href: 'advanced/rating.html',
              items: []
            },
            {
              name: 'Context Menu',
              href: 'advanced/context-menu.html',
              items: []
            },
            {
              name: 'Alertify',
              href: 'advanced/alertify.html',
              items: []
            },
            {
              name: 'Masonry',
              href: 'advanced/masonry.html',
              items: []
            },
            {
              name: 'Treeview',
              href: 'advanced/treeview.html',
              items: []
            },
            {
              name: 'Toastr',
              href: 'advanced/toastr.html',
              items: []
            },
            {
              name: 'Vector Maps',
              href: 'advanced/maps-vector.html',
              items: []
            },
            {
              name: 'Google Maps',
              href: 'advanced/maps-google.html',
              items: []
            },
            {
              name: 'Sortable & Nestable',
              href: 'advanced/sortable-nestable.html',
              items: []
            },
            {
              name: 'Bootbox & Sweetalert',
              href: 'advanced/bootbox-sweetalert.html',
              items: []
            },
          ]
        },
        {
          name: 'Structure',
          icon: 'waves',
          isFold: true,
          items: [
            {
              name: 'Alerts',
              href: 'structure/alerts.html',
              items: []
            },
            {
              name: 'Ribbon',
              href: 'structure/ribbon.html',
              items: []
            },
            {
              name: 'Pricing Tables',
              href: 'structure/pricing-tables.html',
              items: []
            },
            {
              name: 'Overlay',
              href: 'structure/overlay.html',
              items: []
            },
            {
              name: 'Cover',
              href: 'structure/cover.html',
              items: []
            },
            {
              name: 'Simple Timeline',
              href: 'structure/timeline-simple.html',
              items: []
            },
            {
              name: 'Timeline',
              href: 'structure/timeline.html',
              items: []
            },
            {
              name: 'Step',
              href: 'structure/step.html',
              items: []
            },
            {
              name: 'Comments',
              href: 'structure/comments.html',
              items: []
            },
            {
              name: 'Media',
              href: 'structure/media.html',
              items: []
            },
            {
              name: 'Chat',
              href: 'structure/chat.html',
              items: []
            },
            {
              name: 'Testimonials',
              href: 'structure/testimonials.html',
              items: []
            },
            {
              name: 'Nav',
              href: 'structure/nav.html',
              items: []
            },
            {
              name: 'Navbars',
              href: 'structure/navbars.html',
              items: []
            },
            {
              name: 'Blockquotes',
              href: 'structure/blockquotes.html',
              items: []
            },
            {
              name: 'Pagination',
              href: 'structure/pagination.html',
              items: []
            },
            {
              name: 'Breadcrumbs',
              href: 'structure/paginabreadcrumbstion.html',
              items: []
            },
          ]
        },
        {
          name: 'Widgets',
          icon: 'widgets',
          isFold: true,
          items: [
            {
              name: 'Statistics Widgets',
              href: 'widgets/statistics.html',
              items: []
            },
            {
              name: 'Data Widgets',
              href: 'widgets/data.html',
              items: []
            },
            {
              name: 'Blog Widgets',
              href: 'widgets/blog.html',
              items: []
            },
            {
              name: 'Chart Widgets',
              href: 'widgets/chart.html',
              items: []
            },
            {
              name: 'Social Widgets',
              href: 'widgets/social.html',
              items: []
            },
            {
              name: 'Weather Widgets',
              href: 'widgets/weather.html',
              items: []
            },
          ]
        },
        {
          name: 'Forms',
          icon: 'textsms',
          isFold: true,
          items: [
            {
              name: 'General Elements',
              href: 'forms/general.html',
              items: []
            },
            {
              name: 'Material Elements',
              href: 'forms/material.html',
              items: []
            },
            {
              name: 'Advanced Elements',
              href: 'forms/advanced.html',
              items: []
            },
            {
              name: 'Form Layouts',
              href: 'forms/layouts.html',
              items: []
            },
            {
              name: 'Form Wizard',
              href: 'forms/wizard.html',
              items: []
            },
            {
              name: 'Form Validation',
              href: 'forms/validation.html',
              items: []
            },
            {
              name: 'Form Masks',
              href: 'forms/masks.html',
              items: []
            },
            {
              name: 'Editors',
              isFold: true,
              items: [
                {
                  name: 'Summernote',
                  href: 'forms/editor-summernote.html',
                  items: []
                },
                {
                  name: 'Markdown',
                  href: 'forms/editor-markdown.html',
                  items: []
                },
                {
                  name: 'Ace Editor',
                  href: 'forms/editor-ace.html',
                  items: []
                },
              ]
            },
            {
              name: 'Image Cropping',
              href: 'forms/image-cropping.html',
              items: []
            },
            {
              name: 'File Uploads',
              href: 'forms/file-uploads.html',
              items: []
            },
          ]
        },
        {
          name: 'Tables',
          icon: 'border_all',
          isFold: true,
          items: [
            {
              name: 'Basic Tables',
              href: 'tables/basic.html',
              items: []
            },
            {
              name: 'Bootstrap Tables',
              href: 'tables/bootstrap.html',
              items: []
            },
            {
              name: 'floatThead',
              href: 'tables/floatthead.html',
              items: []
            },
            {
              name: 'Responsive Tables',
              href: 'tables/responsive.html',
              items: []
            },
            {
              name: 'Editable Tables',
              href: 'tables/editable.html',
              items: []
            },
            {
              name: 'jsGrid',
              href: 'tables/jsgrid.html',
              items: []
            },
            {
              name: 'FooTable',
              href: 'tables/footable.html',
              items: []
            },
            {
              name: 'DataTables',
              href: 'tables/datatable.html',
              items: []
            },
            {
              name: 'Jquery Tabledit',
              href: 'tables/jqtabledit.html',
              items: []
            },
            {
              name: 'Table Dragger',
              href: 'tables/table-dragger.html',
              items: []
            },
          ]
        },
        {
          name: 'Chart',
          icon: 'insert_chart',
          isFold: true,
          items: [
            {
              name: 'Chart.js',
              href: 'charts/chartjs.html',
              items: []
            },
            {
              name: 'Gauges',
              href: 'charts/gauges.html',
              items: []
            },
            {
              name: 'Flot',
              href: 'charts/flot.html',
              items: []
            },
            {
              name: 'Peity',
              href: 'charts/peity.html',
              items: []
            },
            {
              name: 'Sparkline',
              href: 'charts/sparkline.html',
              items: []
            },
            {
              name: 'Morris',
              href: 'charts/morris.html',
              items: []
            },
            {
              name: 'Chartist.js',
              href: 'charts/chartist.html',
              items: []
            },
            {
              name: 'Rickshaw',
              href: 'charts/rickshaw.html',
              items: []
            },
            {
              name: 'Pie Progress',
              href: 'charts/pie-progress.html',
              items: []
            },
            {
              name: 'C3',
              href: 'charts/c3.html',
              items: []
            },
          ]
        }
      ]
    },
    {
      name: 'Apps',
      isFold: false,
      isCategory: true,
      items: [
        {
          name: 'Apps',
          icon: 'apps',
          isFold: false,
          items: [
            {
              name: 'Contacts',
              href: 'apps/contacts/contacts.html',
              items: []
            },
            {
              name: 'Calendar',
              href: 'apps/calendar/calendar.html',
              items: []
            },
            {
              name: 'Notebook',
              href: 'apps/notebook/notebook.html',
              items: []
            },
            {
              name: 'Taskboard',
              href: 'apps/taskboard/taskboard.html',
              items: []
            },
            {
              name: 'Documents',
              isFold: false,
              items: [
                {
                  name: 'Articles',
                  href: 'apps/documents/articles.html',
                  items: []
                },
                {
                  name: 'Categories',
                  href: 'apps/documents/categories.html',
                  items: []
                },
                {
                  name: 'Article',
                  href: 'apps/documents/article.html',
                  items: []
                },
              ]
            },
            {
              name: 'Forum',
              href: 'apps/forum/forum.html',
              items: []
            },
            {
              name: 'Message',
              href: 'apps/message/message.html',
              items: []
            },
            {
              name: 'Projects',
              href: 'apps/projects/projects.html',
              items: []
            },
            {
              name: 'Mailbox',
              href: 'apps/mailbox/mailbox.html',
              items: []
            },
            {
              name: 'Media',
              href: 'apps/media/overview.html',
              items: []
            },
            {
              name: 'Work',
              href: 'apps/work/work.html',
              items: []
            },
            {
              name: 'Location',
              href: 'apps/location/location.html',
              items: []
            },
            {
              name: 'Travel',
              href: 'apps/travel/travel.html',
              items: []
            },
          ]
        },
      ]
    }
  ];

  public menu$: Subject<Menuitem[]> = new Subject();

  constructor() {
    this.menu$.next(this.getMenu());
  }

  public getMenu(): Menuitem[] {
    return this.menuStructure;
  }

}
