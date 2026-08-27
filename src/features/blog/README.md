# Blog feature architecture

The Autonauts blog is organized as a self-contained feature. This keeps visual
sections, route pages, content, and interaction behaviour easy to find without
changing the public URL contract.

```
src/
├── app/
│   ├── App.jsx              # subscribes to browser navigation and renders a route
│   └── routes.js            # single public-path matching contract
└── features/blog/
    ├── components/
    │   ├── cards/           # reusable blog-card wrappers
    │   ├── layout/          # shared site chrome (navigation and footer)
    │   └── sections/        # reusable landing and listing page sections
    ├── content/             # India and Australia post data
    ├── hooks/               # animation, scroll, viewport, and carousel behaviour
    ├── pages/               # route-level page composition
    ├── styles/              # feature-scoped CSS for visual effects
    └── utils/               # client navigation and Turbo UI data adapters
```

## Public routes

| Path | Page |
| --- | --- |
| `/` | India stories |
| `/archive` | India blog archive |
| `/blog/:id` | India story detail |
| `/:region` | Region story listing (where the region is a supported filter) |
| `/au` | Australia stories |
| `/au/blog/:id` | Australia story detail fallback |

All internal article navigation is handled by `utils/navigation.js`; external
Cars24 Australia article URLs retain their normal full-page navigation.
