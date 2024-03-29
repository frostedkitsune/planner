// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $accounts from "./routes/accounts.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $createmap from "./routes/createmap.tsx";
import * as $dashboard from "./routes/dashboard.tsx";
import * as $discover from "./routes/discover.tsx";
import * as $index from "./routes/index.tsx";
import * as $map_id_ from "./routes/map/[id].tsx";
import * as $progress from "./routes/progress.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Resource from "./islands/Resource.tsx";
import * as $Sign from "./islands/Sign.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/accounts.tsx": $accounts,
    "./routes/api/joke.ts": $api_joke,
    "./routes/createmap.tsx": $createmap,
    "./routes/dashboard.tsx": $dashboard,
    "./routes/discover.tsx": $discover,
    "./routes/index.tsx": $index,
    "./routes/map/[id].tsx": $map_id_,
    "./routes/progress.tsx": $progress,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/Resource.tsx": $Resource,
    "./islands/Sign.tsx": $Sign,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
