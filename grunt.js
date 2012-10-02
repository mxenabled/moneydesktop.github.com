module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', 'amber concat');

  grunt.initConfig({
    amber: {
      'tmp/amber.compiled': [] // 'Cards', 'Presentation-MagLev' ]
    },
    concat: {
      'public/js/app.js': [
        'public/js/jquery-1.8.2.min.js',
        // Amber IDE dependencies
        'vendor/amber/js/lib/jQuery/jquery-ui-1.8.16.custom.min.js',
        'vendor/amber/js/lib/jQuery/jquery.textarea.js',
        'vendor/amber/js/lib/CodeMirror/codemirror.js',
        'vendor/amber/js/lib/CodeMirror/smalltalk.js',
        'tmp/amber.compiled.js'
      ],
      'public/css/app.css': [
        'public/css/bootstrap.min.css',
        'public/css/bootstrap.responsive.min.css',
        'vendor/amber/css/amber.css',
        'vendor/amber/js/lib/CodeMirror/codemirror.css',
        'vendor/amber/js/lib/CodeMirror/amber.css',
        'public/css/amber-overrides.css'
      ]
    }
  });

  grunt.registerMultiTask('amber', 'Compile Amber Smalltalk', function() {
    var libraries = this.data.map(function(package){ return '../../../js/'+package; });
    libraries = 'parser,Compiler,Canvas,IDE,SUnit,'+libraries;
    var cmd = './vendor/amber/bin/amberc -l ' + libraries + ' ' + this.target;
    grunt.log.writeln('Executing: ' + cmd);
    grunt.helper('exec', cmd);
    grunt.log.writeln('File "' + this.target + '.js" created.');
  });

};
