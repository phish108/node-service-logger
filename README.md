# node-service-logger

A helper to instantiate winston loggers for my javascript web-services

## Usage

Initialise the logger in the service main routine:

```js
import {initLogger, getLogger} from "service-logger";

initLogger({level: "info"});

const logger = getLogger("main");

log.debug("debug me");
log.info("inform me");
log.crit("this is critical");
```

Use in a service component such as an included file: 

```js
import {getLogger} from "service-logger";

const logger = getLogger("main");

log.debug("debug me");
log.info("inform me");
log.crit("this is critical");
```

## Rationale

I need a standardised way for logging in my micro services, so I can pull them into a system like prometheus. I want a standardised machine readable logging format with a standardised levels across my services.

I use [winston logger](https://www.npmjs.com/package/winston) for its flexibitly.

## Requirements 

- [x] All logs use the [JSONL format](https://jsonlines.org/). 
- [x] All logs have timestamps.
- [x] Internal components of a service are identifyable. 
- [ ] Activate logging levels for individual components, centrally 

## Logging levels

I use 9 levels of logging, which follow the principles of [RFC5424 Table 2](https://www.rfc-editor.org/rfc/rfc5424#section-6.2.1). I added two additional levels: `performance` and `data`. `performance` records performance metrices, which are always reported. `data` messages are reserved for super low level debugging, when data introspection is needed. This level should be used when exposing privacy related data, security related data, or very large data objects. 

- `performance`: performance metrices
- `emergency`: unrecoverable errors
- `alert`: major but resolvable problems (e.g., connection errors)
- `critical`: critical errors (e.g., for security relevant information)
- `error`: service errors (e.g., when access is denied)
- `warning`: component errors (e.g., when a component is skippeds)
- `notice`: noteworthy (for conformance purposes)
- `info`: runtime information
- `debug`: detailed logging
- `data`: for super detailed logging of data when bug hunting, which may include confidential information
