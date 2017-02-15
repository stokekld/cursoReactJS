import http from 'http';
import React from 'react';
import { ReactDOMServer, renderToString } from 'react-dom/server';
//import { ServerRouter, createServerRenderContext } from 'react-router';
import { StaticRouter } from 'react-router';

import Pages from './pages/containers/Pages.jsx';

function requestHandler(request, response) {
	//const context = createServerRenderContext();
	const context = {}

	const html = renderToString(
		<StaticRouter location={request.url} context={context}>

			<Pages />
			
		</StaticRouter >
	);

	//const result = context.getResult();
	const result = context.url;
	
	response.setHeader('Content-Type', 'text/html');

	if (result.redirect){
		response.writeHead({
			Location: result.redirect.pathname,
		});
		response.end();
	}

	if (result.missed){
		response.writeHead(404);
		
		html = renderToString(
			<StaticRouter location={request.url} context={context}>
				<Pages />
			</StaticRouter >
		);
	}
	response.write(html);
	response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000)
