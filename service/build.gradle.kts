plugins {
    val micronautGradlePluginVersion = "4.4.4"
    val shadowPluginVersion = "8.1.1"

    id("com.github.johnrengelman.shadow") version shadowPluginVersion
    id("io.micronaut.application") version micronautGradlePluginVersion
    id("io.micronaut.aot") version micronautGradlePluginVersion
}

group = "com.brucemelo"

repositories {
    mavenCentral()
}

dependencies {
    val micronautPlatformVersion = "4.7.6"

    annotationProcessor("io.micronaut:micronaut-http-validation")
    annotationProcessor("io.micronaut.security:micronaut-security-annotations")
    annotationProcessor("io.micronaut.serde:micronaut-serde-processor")
    implementation("io.micronaut.security:micronaut-security-jwt")
    implementation("io.micronaut.serde:micronaut-serde-jackson")
    compileOnly("io.micronaut:micronaut-http-client")
    runtimeOnly("ch.qos.logback:logback-classic")
    runtimeOnly("org.yaml:snakeyaml")
    testImplementation("io.micronaut:micronaut-http-client")
    aotPlugins(platform("io.micronaut.platform:micronaut-platform:$micronautPlatformVersion"))
    aotPlugins("io.micronaut.security:micronaut-security-aot")
}

application {
    mainClass = "com.brucemelo.Application"
}

java {
    sourceCompatibility = JavaVersion.VERSION_21
    targetCompatibility = JavaVersion.VERSION_21
}

graalvmNative.toolchainDetection = false

micronaut {
    runtime("netty")
    testRuntime("junit5")
    processing {
        incremental(true)
        annotations("com.brucemelo.*")
    }
}


