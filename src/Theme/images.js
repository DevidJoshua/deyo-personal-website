
function imgImport($url_name){
    return require(`../Images/${$url_name}`).default
}
const images ={
    logo:imgImport('logo.png'),
    logoLight:imgImport('logo-night.png'),
    mePhoto:imgImport('me-photo.png'),
    bgMgLight:imgImport('bg-motion-graphics-light.png'),
    //tools
    ae:imgImport('skills/aftereffect.png'),
    git:imgImport('skills/github.png'),
    gl:imgImport('skills/graphql.png'),
    hs:imgImport('skills/htmljscss.png'),
    ns:imgImport('skills/nodejs.png'),
    ps:imgImport('skills/photoshop.png'),
    pl:imgImport('skills/phpmysql.png'),
    pr:imgImport('skills/premiere.png'),
    rt:imgImport('skills/react.png'),
    ss:imgImport('skills/sass.png'),

}

export default images