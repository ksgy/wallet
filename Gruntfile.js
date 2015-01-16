// Generated on 2014-08-20 using generator-angular-feature 0.6.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// load less
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-google-cdn');
	grunt.loadNpmTasks('grunt-auto-install');
	grunt.loadNpmTasks('grunt-ng-annotate');


	var corsMiddleware = function() {
		return function(req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
			next();
		};
	};

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		yeoman: {
			// configurable paths
			// Application path will be read from config.json file (this.config.app.path).
			app: 'app',
			dist: 'dist'
		},

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			js: {
				files: ['app/src/**/*.js'],
				tasks: ['newer:jshint:all'],
				options: {
					livereload: true
				}
			},
			jsTest: {
				files: ['app/src/**/tests/spec/{,*/}*.js'],
				tasks: ['newer:jshint:test', 'karma']
			},
			styles: {
				files: [
					'app/src/**/assets/styles/{,*/}*.css',
					'app/src/**/assets/less/{,*/}*.less'
				],
				// tasks: ['newer:copy:styles', 'autoprefixer', 'less:development'],
				tasks: ['newer:copy:styles', 'autoprefixer'],
				options: {
					nospawn: true,
					livereload: true
				}
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= yeoman.app %>/{,*/}*.html',
					'.tmp/styles/{,*/}*.css',
					'app/src/**/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
					'app/src/{,*/}*.js'
				],
				tasks: ['livereload']
			}
		},

		inline: {
			dist: {
				options: {
					cssmin: true
				},
				src: ['dist/index.html']
			}
		},

		// The actual grunt server settings
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: '0.0.0.0',
				// hostname: '127.0.0.1',
				livereload: 35729,
				middleware: function(connect, options) {
					return [
						// CORS support
						function(req, res, next) {
							res.setHeader('Access-Control-Allow-Origin', '*');
							res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
							res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
							next();
						},
						connect.static('.tmp'),
						connect.static('app')
					];
				}
			},
			livereload: {
				options: {
					// open: true,
					base: [
						'.tmp',
						'<%= yeoman.app %>'
					]
				}
			},
			test: {
				options: {
					port: 9000,
					base: [
						'.tmp',
						'test',
						'<%= yeoman.app %>'
					]
				}
			},
			dist: {
				options: {
					base: '<%= yeoman.dist %>'
				}
			}
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'app/src/**/*.js'
			],
			test: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: ['app/src/**/tests/spec/{,*/}*.js']
			}
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},

		// Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['> 1%', 'last 3 versions']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},

		// Automatically inject Bower components into the app
		'bower-install': {
			app: {
				html: '<%= yeoman.app %>/index.html',
				ignorePath: '<%= yeoman.app %>/'
			}
		},





		// Renames files for browser caching purposes
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						'<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= yeoman.app %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},

		// Performs rewrites based on rev and the useminPrepare configuration
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				assetsDirs: ['<%= yeoman.dist %>']
			}
		},

		// The following *-min tasks produce minified files in the dist folder
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'app/src/**/assets/images',
					src: '{,*/}*.{png,jpg,jpeg,gif}',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'app/src/**/assets/images',
					src: '{,*/}*.svg',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeCommentsFromCDATA: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>',
					src: ['*.html', 'views/{,*/}*.html'],
					dest: '<%= yeoman.dist %>'
				}]
			}
		},

		// Allow the use of non-minsafe AngularJS files. Automatically makes it
		// minsafe compatible so Uglify does not destroy the ng references
		ngAnnotate: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: '*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		// Replace Google CDN references
		cdnify: {
			dist: {
				html: ['<%= yeoman.dist %>/*.html']
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'*.html',
						'src/**/views/{,*/}*.html',
						'vendor/bower_components/**/*',
						'src/**/assets/images/{,*/}*.{webp,png,jpg,jpeg,gif}',
						'src/**/assets/styles/*critical*.css',
						'src/**/assets/fonts/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: ['generated/*']
				}]
			},
			styles: {
				expand: true,
				cwd: 'app/src/**/assets/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			}
		},

		// Run some tasks in parallel to speed up the build process
		concurrent: {
			server: [
				'copy:styles'
			],
			test: [
				'copy:styles'
			],
			dist: [
				'copy:styles',
				'imagemin',
				'svgmin'
			]
		},

		// By default, your `index.html`'s <!-- Usemin block --> will take care of
		// minification. These next options are pre-configured if you do not wish
		// to use the Usemin blocks.
		// cssmin: {
		//   dist: {
		//     files: {
		//       '<%= yeoman.dist %>/styles/main.css': [
		//         '.tmp/styles/{,*/}*.css',
		//         '<%= yeoman.app %>/styles/{,*/}*.css'
		//       ]
		//     }
		//   }
		// },
		// uglify: {
		//   dist: {
		//     files: {
		//       '<%= yeoman.dist %>/scripts/scripts.js': [
		//         '<%= yeoman.dist %>/scripts/scripts.js'
		//       ]
		//     }
		//   }
		// },
		// concat: {
		//   dist: {}
		// },

		// Test settings
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: false
			},
			deploy: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},

		ngtemplates:  {
			app:        {
				src:      ['./**/views/**.html', './**/views/**/**.html'],
				dest:     'app/src/app.templates.js',
				options: {
					prefix: '/',
					//usemin: 'scripts/scripts.js',
					module: 'walletApp',
					url: function(url) {
						return url.replace('./app/', ''); // fix for absolute path urls
					},
					htmlmin: {
						collapseBooleanAttributes:      true,
						collapseWhitespace:             true,
						removeAttributeQuotes:          false,
						removeComments:                 true,
						removeEmptyAttributes:          false,
						removeRedundantAttributes:      false,
						removeScriptTypeAttributes:     true,
						removeStyleLinkTypeAttributes:  true
					}
				}
			}
		},


		auto_install: {
			local: {},
			subdir: {
				options: {
					cwd: '',
					stdout: true,
					stderr: true,
					failOnError: true
				}
			}
		},

		pkg: grunt.file.readJSON('package.json'),


		protractor: {
			options: {
				keepAlive: true,
				singleRun: false,
				configFile: 'app/tests/conf.js'
			},
			all: {}
		}
	});


	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build-uat', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'auto_install',
			'clean:server',
			'bower-install',
			// 'less:development',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});

	grunt.registerTask('test', [
		'auto_install',
		'clean:server',
		'clean:dist',
		'bower-install',
		'ngtemplates',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma:unit'
	]);

	grunt.registerTask('build-uat', [
		'auto_install',
		'checkbranch:master',
		'karma:deploy',
		'clean:dist',
		'bower-install',
		'useminPrepare',
		'concurrent:dist',
		// 'less:production',
		'autoprefixer',
		'ngtemplates',
		'concat',
		'ngannotate',
		'copy:dist',
		'cdnify',
		'cssmin',
		'uglify',
		'usemin',
		'inline:dist',
		'htmlmin'
	]);

	grunt.registerTask('build-prod', [
		'auto_install',
		'checkbranch:master',
		'karma:deploy',
		'clean:dist',
		'bower-install',
		'useminPrepare',
		'concurrent:dist',
		// 'less:production',
		'autoprefixer',
		'ngtemplates',
		'concat',
		'ngannotate',
		'copy:dist',
		'cdnify',
		'cssmin',
		'uglify',
		'usemin',
		'inline:dist',
		'htmlmin'
	]);

	grunt.registerTask('e2e-test', ['protractor:all']);

	grunt.registerTask('default', [
		'newer:jshint',
		'test',
		'build'
	]);
};
