module.exports = function(grunt) {
  grunt.initConfig({

    less: {
        style: {
            src: 'less/repos.less',
            dest: 'css/repos.css'
        }
    },

    open : {
      dev : {
        url : 'http://localhost:4000/'
      }
    },

    reload: {
      // LiveReload
      port: 35729,
      liveReload: {}
    },

    watch:{
        files:['index.html',  'less/repos.less'],
        tasks:'default less'
    }

  });

  grunt.loadNpmTasks('grunt-less');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', 'less');

  // grunt.registerTask('server', 'Start the basic web server', function() {
  //   grunt.log.writeln('Starting web server on port 4000.');
  //   require('./server.js');
  // });



  // grunt.loadNpmTasks('grunt-exec');
  // grunt.loadNpmTasks('grunt-reload');

  // grunt.registerTask('default', 'concat');
  // grunt.registerTask('release', 'default min cssmin');

  // grunt.initConfig({
  //   amber: {
  //     'js/amber-compiled': ['GitHubPages']
  //   },

  //   concat: {
  //     'js/repos.js': [
  //       'js/jquery-1.8.2.min.js',

  //       // Amber IDE dependencies
  //       'amber/js/lib/jQuery/jquery-ui-1.8.16.custom.min.js',
  //       'amber/js/lib/jQuery/jquery.textarea.js',
  //       'amber/js/lib/CodeMirror/codemirror.js',
  //       'amber/js/lib/CodeMirror/smalltalk.js',

  //       'js/amber-compiled.js'
  //     ],

  //     // Amber IDE dependencies
  //     'css/amber-concat.css': [
  //       'amber/css/amber.css',
  //       'amber/js/lib/CodeMirror/codemirror.css',
  //       'amber/js/lib/CodeMirror/amber.css',
  //       'css/amber-overrides.css'
  //     ],

  //     'css/app.css': [
  //       'css/bootstrap.css',
  //       'css/bootstrap.responsive.css',
  //       'css/amber-concat.css',
  //       'css/repos.css'
  //     ]
  //   },

  //   cssmin: {
  //     'css/app.min.css': ['css/app.css']
  //   },

  //   min: {
  //     'js/app.min.js': ['js/app.js']
  //   },

  //   watch: {
  //     files: ['js/*.deploy.js'],
  //     tasks: 'default'
  //   }
  // });

  // grunt.registerMultiTask('amber', 'Compile Amber Smalltalk', function() {
  //   var userPackages = this.data.map(function(package){ return '../../js/'+package; });

  //   var additionalPackages = [
  //     'parser',
  //     'Importer-Exporter',

  //     'Compiler-Exceptions',
  //     'Compiler-Core',
  //     'Compiler-AST',
  //     'Compiler-Semantic',
  //     'Compiler-IR',
  //     'Compiler-Inlining',
  //     'Kernel-Announcements',

  //     'SUnit',
  //     'Compiler-Tests',
  //     'Kernel-Tests',
  //     'Canvas',
  //     'IDE',

  //     'compat'
  //   ];

  //   var allPackages = additionalPackages.join(',');
  //   if (userPackages.length > 0) {
  //     allPackages += ',' + userPackages.join(',');
  //   }

  //   var targetFile = this.target;
  //   var cmd = './amber/bin/amberc -l ' + allPackages + ' ' + targetFile;
  //   grunt.log.writeln('Executing: ' + cmd);
  //   grunt.helper('exec', cmd, function(){
  //     grunt.log.writeln('File "' + targetFile + '.js" created.');
  //   });
  // });
};
