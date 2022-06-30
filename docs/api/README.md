# Програмний модуль **"molfar-node"** | Специфікація модуля

## Functions

<dl>
<dt><a href="#sendResponse">sendResponse(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#deployMicroserviceHandler">deployMicroserviceHandler(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#startMicroserviceHandler">startMicroserviceHandler(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#terminateMicroserviceHandler">terminateMicroserviceHandler(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#undeployMicroserviceHandler">undeployMicroserviceHandler(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#setMicroserviceConfigHandler">setMicroserviceConfigHandler(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#holdMicroservice">holdMicroservice(servicePath, id)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#deployMicroservice">deployMicroservice(id, repo)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#undeployMicroservice">undeployMicroservice(id)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#startMicroservice">startMicroservice(id, config)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#terminateMicroservice">terminateMicroservice(id)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#setMicroserviceConfig">setMicroserviceConfig(id, config)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
</dl>

<a name="sendResponse"></a>

## sendResponse(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| req.output | <code>String</code> | Формат відповіді від сервісу |
| res | <code>Object</code> |  |

<a name="deployMicroserviceHandler"></a>

## deployMicroserviceHandler(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| req.id | <code>String</code> | Ідентифікатор сервісу, для завантаження |
| req.repo | <code>String</code> |  |
| res | <code>Object</code> |  |

<a name="startMicroserviceHandler"></a>

## startMicroserviceHandler(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| req.id | <code>String</code> | Ідентифікатор сервісу, для запуску |
| req.service | <code>String</code> | Конфігурація для сервісу |
| res | <code>Object</code> |  |

<a name="terminateMicroserviceHandler"></a>

## terminateMicroserviceHandler(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| req.id | <code>String</code> | Ідентифікатор сервісу, для зупинки |
| res | <code>Object</code> |  |

<a name="undeployMicroserviceHandler"></a>

## undeployMicroserviceHandler(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| req.id | <code>String</code> | Ідентифікатор сервісу, для вивантаження |
| res | <code>Object</code> |  |

<a name="setMicroserviceConfigHandler"></a>

## setMicroserviceConfigHandler(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> |  |
| req.id | <code>String</code> | Ідентифікатор сервісу, для налашування |
| req.service | <code>String</code> | Конфігурація для сервісу |
| res | <code>Object</code> |  |

<a name="holdMicroservice"></a>

## holdMicroservice(servicePath, id) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| servicePath | <code>String</code> | Шлях розташування |
| id | <code>String</code> | Ідентифікатор |

<a name="deployMicroservice"></a>

## deployMicroservice(id, repo) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Ідентифікатор |
| repo | <code>String</code> | Шлях до сервісу |

<a name="undeployMicroservice"></a>

## undeployMicroservice(id) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Ідентифікатор |

<a name="startMicroservice"></a>

## startMicroservice(id, config) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Ідентифікатор |
| config | <code>Object</code> |  |

<a name="terminateMicroservice"></a>

## terminateMicroservice(id) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Ідентифікатор |

<a name="setMicroserviceConfig"></a>

## setMicroserviceConfig(id, config) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Ідентифікатор |
| config | <code>Object</code> |  |

