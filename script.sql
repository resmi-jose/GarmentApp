USE [master]
GO
/****** Object:  Database [sup2DB]    Script Date: 14-06-2019 06:08:30 PM ******/
CREATE DATABASE [sup2DB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'sup2DB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS2017\MSSQL\DATA\sup2DB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'sup2DB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS2017\MSSQL\DATA\sup2DB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [sup2DB] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [sup2DB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [sup2DB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [sup2DB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [sup2DB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [sup2DB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [sup2DB] SET ARITHABORT OFF 
GO
ALTER DATABASE [sup2DB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [sup2DB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [sup2DB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [sup2DB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [sup2DB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [sup2DB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [sup2DB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [sup2DB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [sup2DB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [sup2DB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [sup2DB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [sup2DB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [sup2DB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [sup2DB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [sup2DB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [sup2DB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [sup2DB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [sup2DB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [sup2DB] SET  MULTI_USER 
GO
ALTER DATABASE [sup2DB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [sup2DB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [sup2DB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [sup2DB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [sup2DB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [sup2DB] SET QUERY_STORE = OFF
GO
USE [sup2DB]
GO
/****** Object:  Table [dbo].[product]    Script Date: 14-06-2019 06:08:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[productID] [int] IDENTITY(1,1) NOT NULL,
	[fabricInfo] [varchar](50) NULL,
	[productName] [varchar](50) NULL,
	[garmentDes] [varchar](50) NULL,
	[fontName] [varchar](50) NULL,
	[fontNumber] [varchar](50) NULL,
	[garmentImg] [varchar](500) NULL,
	[garmentSpecf] [varchar](50) NULL,
	[chestXs] [int] NULL,
	[chestS] [int] NULL,
	[chestM] [int] NULL,
	[chestL] [int] NULL,
	[chestXl] [int] NULL,
	[chest2xl] [int] NULL,
	[chest3xl] [int] NULL,
	[chest4xl] [int] NULL,
	[chest5xl] [int] NULL,
	[lengthXs] [int] NULL,
	[lengthS] [int] NULL,
	[lengthM] [int] NULL,
	[lengthL] [int] NULL,
	[lengthXl] [int] NULL,
	[length2xl] [int] NULL,
	[length3xl] [int] NULL,
	[length4xl] [int] NULL,
	[length5xl] [int] NULL,
	[specialInstruction] [varchar](500) NULL,
	[signature] [varchar](20) NULL,
	[orderedDate] [varchar](20) NULL,
	[requiredDate] [varchar](20) NULL,
	[favcolor1] [varchar](20) NULL,
	[favcolorText1] [varchar](20) NULL,
	[favcolor2] [varchar](20) NULL,
	[favcolorText2] [varchar](20) NULL,
	[favcolor3] [varchar](20) NULL,
	[favcolorText3] [varchar](20) NULL,
	[favcolor4] [varchar](20) NULL,
	[favcolorText4] [varchar](20) NULL,
	[favcolor5] [varchar](20) NULL,
	[favcolorText5] [varchar](20) NULL,
	[favcolor6] [varchar](20) NULL,
	[favcolorText6] [varchar](20) NULL,
	[piecesXs] [varchar](20) NULL,
	[piecesS] [varchar](20) NULL,
	[piecesM] [varchar](20) NULL,
	[piecesL] [varchar](20) NULL,
	[piecesXl] [varchar](20) NULL,
	[pieces2xl] [varchar](20) NULL,
	[pieces3xl] [varchar](20) NULL,
	[pieces4xl] [varchar](20) NULL,
	[pieces5xl] [varchar](20) NULL,
	[pieces6xl] [varchar](20) NULL,
	[pieces7xl] [varchar](20) NULL,
	[piecesTotal] [varchar](20) NULL,
	[labelText1] [varchar](20) NULL,
	[labelImg1] [varchar](500) NULL,
	[labelText2] [varchar](20) NULL,
	[labelImg2] [varchar](500) NULL,
	[logoText1] [varchar](20) NULL,
	[logoText2] [varchar](20) NULL,
	[logoText3] [varchar](20) NULL,
	[logoText4] [varchar](20) NULL,
	[logoImg1] [varchar](500) NULL,
	[logoImg2] [varchar](500) NULL,
	[logoImg3] [varchar](500) NULL,
	[logoImg4] [varchar](500) NULL,
 CONSTRAINT [PK_product] PRIMARY KEY CLUSTERED 
(
	[productID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 14-06-2019 06:08:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NULL,
	[Password] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [sup2DB] SET  READ_WRITE 
GO
