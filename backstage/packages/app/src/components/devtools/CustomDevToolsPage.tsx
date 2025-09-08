import { ConfigContent, ExternalDependenciesContent, InfoContent, DevToolsLayout } from '@backstage/plugin-devtools';
import { UnprocessedEntitiesContent } from '@backstage/plugin-catalog-unprocessed-entities';



// Página personalizada de DevTools; evita colisión de nombre con la exportación oficial del plugin
export const CustomDevToolsPage = () => (
    <DevToolsLayout>
        <DevToolsLayout.Route path="info" title="Info">
            <InfoContent />
        </DevToolsLayout.Route>
        <DevToolsLayout.Route path="config" title="Config">
            <ConfigContent />
        </DevToolsLayout.Route>
        <DevToolsLayout.Route path="external-dependencies" title="External Dependencies">
            <ExternalDependenciesContent />
        </DevToolsLayout.Route>
        <DevToolsLayout.Route path="unprocessed-entities" title="Unprocessed Entities">
            <UnprocessedEntitiesContent />
        </DevToolsLayout.Route>
    </DevToolsLayout>
);

export const customDevToolsPage = <CustomDevToolsPage />;