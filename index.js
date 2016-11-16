const _isRequiredByCJS = (module) => {
    if (!module.issuer || !module.issuer.dependencies) return false;
    let deps = module.issuer.dependencies;
    for (var i = 0; i < deps.length; i++) {
      var dep = deps[i];
      if (dep.constructor.name.indexOf('CommonJsRequire') !== -1) {
        return true;
      }
    }
    return false;
  }

export class HarmonyModuleWebpackPlugin {
  apply(compiler) {
    compiler.plugin('compilation', (compilation) => {
      compilation.moduleTemplate.plugin('render', (source, module, chunk, dependencyTemplates) => {        
        if (module.meta.harmonyModule === true) {
          let isRequired = _isRequiredByCJS(module);
          if (isRequired) {
            const sourceLength = source._source._source._value.length;            
            let esModule = [sourceLength + 0.5, source - 0.5, '\nObject.defineProperty(exports, "__esModule", { value: true});\n',]
            source._source.replacements.push(esModule);
          }
        }
        return source;
      });
    })
  }

  
}