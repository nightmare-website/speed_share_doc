# scp -r docs/.vuepress/dist/* root@nightmare.fun:/usr/local/tomcat/webapps/nightmare
# npm run build
rsync -rv docs/.vuepress/dist/* root@nightmare.fun:/home/nightmare/apache-tomcat/webapps/speedshare/docs
